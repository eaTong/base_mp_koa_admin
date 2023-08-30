/**
 * Created by eatong on 18-2-10.
 */
const md5 = require('crypto-js/md5');
const {Op} = require('sequelize');
const sequelize = require('../framework/database');
const {LogicError} = require('../framework/errors');


module.exports = {

  login: async ({account, password}) => {
    //
    if ((account === 'slyx' && password === 'slyxbnxq') ||(account === '18288756143' && password === 'a12345')) {
      return {account: 'slyx'}
    }
    throw new LogicError('账号或密码错误!')
  },

};


