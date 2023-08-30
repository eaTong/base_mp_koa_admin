
/**
 * Created by eaTong on 2023-01-13 .
 * Description: auto generated in  2023-01-13
 */

const Sequelize = require('sequelize');
const sequelize = require('../framework/database');

const Notice = sequelize.define('notice', {
  name: {type: Sequelize.STRING},
  enable: Sequelize.BOOLEAN,
});

module.exports = Notice;
