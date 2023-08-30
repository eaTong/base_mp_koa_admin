/**
 * Created by eatong on 17-12-28.
 */
const {ArgMissError, LogicError} = require('./errors');
const whiteList = ['/api/admin/user/login', '/api/user/loginByCode', '/api/user/bind'];

module.exports.checkArguments = (args) => {
  return async (ctx, next) => {
    if (args) {
      const bodyKeys = Object.keys(ctx.request.body);
      if (typeof args === 'string') {
        if (bodyKeys.indexOf(args) === -1) {
          throw(new ArgMissError(args));
        }
      } else {
        for (let arg of args) {
          if (bodyKeys.indexOf(arg) === -1) {
            throw(new ArgMissError(arg));
          }
        }
      }
    }
    return await next();
  }
};

module.exports.checkLogin = async (ctx, next) => {
  if (!/^\/api\/mp/.test(ctx.originalUrl) && whiteList.indexOf(ctx.originalUrl) === -1) {
    if (!ctx.session.login) {
      ctx.status = 401;
      ctx.body = {success: false, data: {}, message: 'this api is not a shared api ,please login'};
      return;
    }
  }
  return await next();
};

module.exports.structureData = async (ctx, next) => {
  try {
    const data = await next();
    if(data instanceof Buffer){
      ctx.body = data;
      // ctx.response.set("content-type", "text/html");
    }else{
      ctx.body = {success: true, data:data||null, message: ''};
    }
  } catch (ex) {
    console.error(ex);
    if (ex instanceof ArgMissError) {
      ctx.status = 400;
      ctx.body = {success: false, data: {}, message: ex.message};
    } else if (ex instanceof LogicError) {
      ctx.status = 200;
      ctx.body = {success: false, data: {}, message: ex.message};

    } else {
      ctx.status = 500;
      ctx.body = {success: false, data: {}, message: ex.message};
    }
  }
};
