
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

import {observable, action} from 'mobx';
import ajax from "~/utils/ajax";
import BaseStore from '~/stores/BaseStore'

export default class SpeakStore extends BaseStore {
  listApi = '/api/speak/get';
  addApi = '/api/speak/add';
  updateApi = '/api/speak/update';
  deleteApi = '/api/speak/delete';
  detailApi = '/api/speak/detail';
  
  @action
  async searchData(keywords) {
    this.queryOption = {keywords};
    this.pageIndex = 0;
    await this.getDataList();
  }
}