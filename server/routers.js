/**
 * Created by eatong on 18-2-8.
 */

const Router = require('@koa/router');
const {checkArguments, checkLogin, structureData} = require('./framework/middleWare');
const {ArgMissError, LogicError} = require('./framework/errors');

const systemFileApi = require('./apis/systemFileApi');
const userApi = require('./apis/userApi');
const adminApi = require('./apis/adminApi');
//UPDATE_TAG:importApi

const router = new Router();
//define data structure for all API
router.all('/api/(.*)', checkLogin);
router.all('/api/(.*)', structureData);
router.post('/api/image/upload', systemFileApi.uploadImage);
router.post('/api/file/upload', systemFileApi.uploadFile);
// 管理后台接口
router.post('/api/admin/user/login', adminApi.login);

//小程序相关借口
router.post('/api/mp/user/login', userApi.login);

//UPDATE_TAG:defineRouter

router.all('/api/(.*)', async ctx => {
  ctx.status = 404;
  ctx.body = 'api not found';
});
function insertLog(){
  return async (ctx, next) => {
    // const operator = ctx.session.loginUser ? ctx.session.loginUser.id : 0,
    //   url = ctx.originalUrl,
    //   req = JSON.stringify(ctx.request.body);
    // await logService.insertLog({operator, req, type, url});
    return await next();
  }
}

module.exports = router;
