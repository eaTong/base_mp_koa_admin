/**
 * Created by eatong on 18-2-10.
 */
const {LogicError} = require("../framework/errors");
const questionService = require('../services/questionService');

module.exports = {

  askQuestion: async (ctx) => {
    const user = ctx.session.user;
    return questionService.ask(ctx.request.body);
  },
  questionList: async (ctx) => {
    return questionService.questionList(ctx.request.body);
  },
  replyQuestion: async (ctx) => {
    return questionService.replyQuestion(ctx.request.body);
  },
  likeQuestion: async (ctx) => {
    return questionService.likeQuestion(ctx.request.body);
  },
  watchedQuestions: async (ctx) => {
    return questionService.watchedQuestions(ctx.request.body);
  },
  newWatchedMessageCount: async (ctx) => {
    return questionService.newWatchedMessageCount(ctx.request.body);
  },
  watchQuestion: async (ctx) => {
    return questionService.watchQuestion(ctx.request.body);
  },
  getQuestionDetail: async (ctx) => {
    return questionService.getQuestionDetail(ctx.request.body);
  }
};

