/**
 * Created by eatong on 18-2-10.
 */
const {LogicError} = require("../framework/errors");
const userService = require('../services/userService');

module.exports = {

  login: async (ctx) => {
    const user = await userService.login(ctx.request.body);
    ctx.session.loginUser = user;
    return user;
  },
};

