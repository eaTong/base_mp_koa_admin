
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

import {observable, action} from 'mobx';
import ajax from "~/utils/ajax";
import BaseStore from '~/stores/BaseStore'

export default class LightupStore extends BaseStore {
  listApi = '/api/lightup/get';
  addApi = '/api/lightup/add';
  updateApi = '/api/lightup/update';
  deleteApi = '/api/lightup/delete';
  detailApi = '/api/lightup/detail';
  
  @action
  async searchData(keywords) {
    this.queryOption = {keywords};
    this.pageIndex = 0;
    await this.getDataList();
  }
}