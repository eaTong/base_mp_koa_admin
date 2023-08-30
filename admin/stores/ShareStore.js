
/**
 * Created by eaTong on 2023-01-19 .
 * Description: auto generated in  2023-01-19
 */

import {observable, action} from 'mobx';
import ajax from "~/utils/ajax";
import BaseStore from '~/stores/BaseStore'

export default class ShareStore extends BaseStore {
  listApi = '/api/share/get';
  addApi = '/api/share/add';
  updateApi = '/api/share/update';
  deleteApi = '/api/share/delete';
  detailApi = '/api/share/detail';
  
  @action
  async searchData(keywords) {
    this.queryOption = {keywords};
    this.pageIndex = 0;
    await this.getDataList();
  }
}