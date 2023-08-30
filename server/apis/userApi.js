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
  lightUp: async (ctx) => {
    return  userService.lightUp(ctx.request.body,ctx.session.loginUser);
  },
  speak: async (ctx) => {
    return  userService.speak(ctx.request.body,ctx.session.loginUser);
  },
  getTimeline: async (ctx) => {
    return  userService.getTimeline(ctx.request.body,ctx.session.loginUser);
  },
  getSpeakList: async (ctx) => {
    return  userService.getSpeakList(ctx.request.body,ctx.session.loginUser);
  },
  getConfig: async (ctx) => {
    return  userService.getConfig(ctx.request.body);
  },
  lightedStatus: async (ctx) => {
    return  userService.lightedStatus(ctx.request.body);
  },
  leavedMessage: async (ctx) => {
    return  userService.leavedMessage(ctx.request.body);
  },
  exportQrCode: async (ctx) => {
    const result =   userService.exportQrCode(ctx.request.body);
    ctx.type = 'image/png';
    ctx.contentType = "image/png";
    return result
  }
};

