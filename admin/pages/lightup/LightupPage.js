
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

import React, {Component} from 'react';
import {Button, message ,Input} from 'antd';
import Reactable from "@eatong/reactable";
import LightupFormModal from "./LightupFormModal";
import {inject, observer} from "mobx-react";
import Title from "~/components/Title";
import PageBase from "~/components/PageBase";
import moment from "moment";

const ButtonGroup = Button.Group;
const columns = [
  {title: '名称', key: 'name'},
  {title: '点亮果实', key: 'lighted',render:(t)=>t?'点亮了果实':''},
  {title: '助力时间', key: 'createdAt',render:(t)=>moment(t).format('YYYY-MM-DD HH:mm:SS')},
];

@inject('lightup','app') @observer
class LightupPage extends PageBase {
  async componentDidMount() {
    await this.props.lightup.getDataList();
  }

  render() {
    const {lightup} = this.props;
    const {dataList, operateType, showFormModal, selectedKeys, rowSelection, firstSelected , pagination} = lightup;
    return (
      <div className="base-layout lightup-page">
        <Title title='助力管理'/>
        <div className="operate-bar">
          <Input.Search
            className={'search'}
            placeholder={'输入关键字搜索'}
            onSearch={(val) => lightup.searchData(val)}
          />
        </div>
        <Reactable
          columns={columns}
          dataSource={dataList}
          rowKey="id"
          tableId="lightup-table"
          pagination={lightup.pagination}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => lightup.onChangeSelection(keys)
          }}/>
        {showFormModal && (
          <LightupFormModal
            onCancel={() => lightup.toggleFormModal()}
            onOk={(data) => lightup.onSaveData(data)}
            operateType={operateType}
            formData={firstSelected}
          />
        )}
      </div>
    );
  }
}

LightupPage.propTypes = {};
export default LightupPage;
