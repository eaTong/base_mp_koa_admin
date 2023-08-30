
/**
 * Created by eaTong on 2023-01-13 .
 * Description: auto generated in  2023-01-13
 */

const {LogicError} = require("../framework/errors");
const noticeService = require('../services/noticeService');

module.exports = {
  addNotice: async (ctx) => {
    return await noticeService.addNotice(ctx.request.body);
  },
  updateNotices: async (ctx) => {
    return await noticeService.updateNotices(ctx.request.body);
  },
  deleteNotices: async (ctx) => {
    return await noticeService.deleteNotices(ctx.request.body.ids);
  },
  getNotices: async (ctx) => {
    return await noticeService.getNotices(ctx.request.body);
  },
  getNoticeDetail: async (ctx) => {
    return await noticeService.getNoticeDetail(ctx.request.body);
  }
};
  