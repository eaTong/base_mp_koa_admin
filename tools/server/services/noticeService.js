
/**
 * Created by eaTong on 2023-01-13 .
 * Description: auto generated in  2023-01-13
 */

const {Op} = require('sequelize');
const sequelize = require('../framework/database');
const {LogicError} = require('../framework/errors');
const Notice = require('../models/Notice');

module.exports = {

  addNotice: async (notice) => {
    notice.logo = JSON.stringify(notice.logo || []);
    notice.enable = true;
    return await Notice.create(notice);
  },

  updateNotices: async (notice) => {
    return await Notice.update(notice, {where: {id: notice.id}})
  },

  deleteNotices: async (ids) => {
    return await Notice.update({enable: false}, {where: {id: {[Op.in]: ids}}});
  },

  getNotices: async ({pageIndex = 0, pageSize = 20, keywords = ''}) => {
    const option = {where: {enable: true, name: {[Op.like]: `%${keywords}%`}}}; 
    const {dataValues: {total}} = await Notice.findOne({
      ...option,
      attributes: [[sequelize.fn('COUNT', '*'), 'total']]
    });
    const list = await Notice.findAll({offset: pageIndex * pageSize, limit: pageSize, ...option});
    return {total, list}
  },

  getNoticeDetail: async ({id}) => {
    return await Notice.findOne({where: {id}});
  }
}; 
  