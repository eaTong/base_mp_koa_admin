
/**
 * Created by eaTong on 2023-01-19 .
 * Description: auto generated in  2023-01-19
 */

const {LogicError} = require("../framework/errors");
const shareService = require('../services/shareService');

module.exports = {
  addShare: async (ctx) => {
    return await shareService.addShare(ctx.request.body);
  },
  updateShares: async (ctx) => {
    return await shareService.updateShares(ctx.request.body);
  },
  deleteShares: async (ctx) => {
    return await shareService.deleteShares(ctx.request.body.ids);
  },
  getShares: async (ctx) => {
    return await shareService.getShares(ctx.request.body);
  },
  getShareDetail: async (ctx) => {
    return await shareService.getShareDetail(ctx.request.body);
  }
};
  