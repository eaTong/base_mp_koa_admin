
/**
 * Created by eaTong on 2023-01-13 .
 * Description: auto generated in  2023-01-13
 */

import {observable, action} from 'mobx';
import ajax from "~/utils/ajax";
import BaseStore from '~/stores/BaseStore'

export default class NoticeStore extends BaseStore {
  listApi = '/api/notice/get';
  addApi = '/api/notice/add';
  updateApi = '/api/notice/update';
  deleteApi = '/api/notice/delete';
  detailApi = '/api/notice/detail';
  
  @action
  async searchData(keywords) {
    this.queryOption = {keywords};
    this.pageIndex = 0;
    await this.getDataList();
  }
}