/**
 * Created by eatong on 18-2-10.
 */
const {LogicError} = require("../framework/errors");
const adminService = require('../services/adminService');

module.exports = {

  login: async (ctx) => {
    const result = await adminService.login(ctx.request.body);
    if(result){
      ctx.session.login = result;
      return true;
    }
  },
};

