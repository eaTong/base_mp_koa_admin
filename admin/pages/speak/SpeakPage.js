
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

import React, {Component} from 'react';
import {Button, message ,Input} from 'antd';
import Reactable from "@eatong/reactable";
import SpeakFormModal from "./SpeakFormModal";
import {inject, observer} from "mobx-react";
import Title from "~/components/Title";
import PageBase from "~/components/PageBase";
import moment from 'moment'

const ButtonGroup = Button.Group;
const columns = [
  {title: '名称', key: 'name'},
  {title: '留言内容', key: 'speak'},
  {title: '发布时间', key: 'createdAt',render:(t)=>moment(t).format('YYYY-MM-DD HH:mm:SS')},
];

@inject('speak','app') @observer
class SpeakPage extends PageBase {
  async componentDidMount() {
    await this.props.speak.getDataList();
  }

  render() {
    const {speak} = this.props;
    const {dataList, operateType, showFormModal, selectedKeys, rowSelection, firstSelected , pagination} = speak;
    return (
      <div className="base-layout speak-page">
        <Title title='寄语管理'/>
        <div className="operate-bar">
          <Input.Search
            className={'search'}
            placeholder={'输入关键字搜索'}
            onSearch={(val) => speak.searchData(val)}
          />
        </div>
        <Reactable
          columns={columns}
          dataSource={dataList}
          rowKey="id"
          tableId="speak-table"
          pagination={speak.pagination}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => speak.onChangeSelection(keys)
          }}/>
        {showFormModal && (
          <SpeakFormModal
            onCancel={() => speak.toggleFormModal()}
            onOk={(data) => speak.onSaveData(data)}
            operateType={operateType}
            formData={firstSelected}
          />
        )}
      </div>
    );
  }
}

SpeakPage.propTypes = {};
export default SpeakPage;
