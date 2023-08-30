
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

const {LogicError} = require("../framework/errors");
const timelineService = require('../services/timelineService');

module.exports = {
  addTimeline: async (ctx) => {
    return await timelineService.addTimeline(ctx.request.body);
  },
  updateTimelines: async (ctx) => {
    return await timelineService.updateTimelines(ctx.request.body);
  },
  deleteTimelines: async (ctx) => {
    return await timelineService.deleteTimelines(ctx.request.body.ids);
  },
  getTimelines: async (ctx) => {
    return await timelineService.getTimelines(ctx.request.body);
  },
  getSpeak: async (ctx) => {
    return await timelineService.getSpeak(ctx.request.body);
  },
  getLightup: async (ctx) => {
    return await timelineService.getLightup(ctx.request.body);
  },
  getTimelineDetail: async (ctx) => {
    return await timelineService.getTimelineDetail(ctx.request.body);
  }
};
