/**
 * Created by eatong on 18-2-10.
 */
const fs = require('fs')
const path = require('path')
const md5 = require('crypto-js/md5');
const crypto = require('crypto');
const {Op} = require('sequelize');
const sequelize = require('../framework/database');
const {LogicError} = require('../framework/errors');
const User = require('../models/User');
const {wechat} = require("../../config/server.config");
const axios = require('axios');

module.exports = {
  login: async ({code}) => {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${wechat.appId}&secret=${wechat.appSecret}&js_code=${code}&grant_type=authorization_code`
    const result = await axios.get(url);
    const data = result.data;
    if (data.openid) {
      const usr = await User.findOne({where: {openId: data.openid}});
      if (!usr) {
        return await User.create({openId: data.openid});
      }
      data.openId = data.openid;

      return data;
    }
  },};
