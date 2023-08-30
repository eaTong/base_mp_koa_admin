/**
 * Created by eatong on 18-2-11.
 */
const Sequelize = require('sequelize');
const sequelize = require('../framework/database');

const User = sequelize.define('user', {
  openId: {type: Sequelize.STRING, unique: true},
  name: Sequelize.STRING,
  avatar: Sequelize.STRING,
  fakeName: Sequelize.STRING,
});
module.exports = User;
