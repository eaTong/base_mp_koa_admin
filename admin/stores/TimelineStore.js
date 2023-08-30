
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

import {observable, action} from 'mobx';
import ajax from "~/utils/ajax";
import BaseStore from '~/stores/BaseStore'

export default class TimelineStore extends BaseStore {
  listApi = '/api/timeline/get';
  addApi = '/api/timeline/add';
  updateApi = '/api/timeline/update';
  deleteApi = '/api/timeline/delete';
  detailApi = '/api/timeline/detail';
  
  @action
  async searchData(keywords) {
    this.queryOption = {keywords};
    this.pageIndex = 0;
    await this.getDataList();
  }
}