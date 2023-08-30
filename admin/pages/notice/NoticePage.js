
/**
 * Created by eaTong on 2023-01-13 .
 * Description: auto generated in  2023-01-13
 */

import React, {Component} from 'react';
import {Button, message ,Input} from 'antd';
import Reactable from "@eatong/reactable";
import NoticeFormModal from "./NoticeFormModal";
import {inject, observer} from "mobx-react";
import Title from "~/components/Title";
import PageBase from "~/components/PageBase";

const ButtonGroup = Button.Group;
const columns = [
  {title: '名称', key: 'name'},
];

@inject('notice','app') @observer
class NoticePage extends PageBase {
  async componentDidMount() {
    await this.props.notice.getDataList();
  }

  render() {
    const {notice} = this.props;
    const {dataList, operateType, showFormModal, selectedKeys, rowSelection, firstSelected , pagination} = notice;
    return (
      <div className="base-layout notice-page">
        <Title title='公告管理'/>
        <div className="operate-bar">
          <Input.Search
            className={'search'}
            placeholder={'输入关键字搜索'}
            onSearch={(val) => notice.searchData(val)}
          />

          <ButtonGroup className="buttons">
            <Button
              onClick={() => this.props.notice.toggleFormModal('add')}
              disabled={this.disableButton('add')}
              type={'primary'}
            >
              新增
            </Button>
            <Button
              onClick={() => notice.toggleFormModal('copyAdd')}
              disabled={this.disableButton('add', selectedKeys.length !== 1)}
            >
              复制并新增
            </Button>
            <Button
              onClick={() => this.props.notice.toggleFormModal('edit')}
              disabled={this.disableButton('edit', selectedKeys.length !== 1)}
            >
              编辑
            </Button>
            <Button
              onClick={() => this.props.notice.deleteData()}
              disabled={this.disableButton('delete', selectedKeys.length === 0)}
            >
              删除
            </Button>
            <Button
              onClick={() => this.props.notice.toggleGrantModal()}
              disabled={this.disableButton('grant', selectedKeys.length !== 1)}
            >
              分配角色
            </Button>
          </ButtonGroup>
        </div>
        <Reactable
          columns={columns}
          dataSource={dataList}
          rowKey="id"
          tableId="notice-table"
          pagination={notice.pagination}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => notice.onChangeSelection(keys)
          }}/>
        {showFormModal && (
          <NoticeFormModal
            onCancel={() => notice.toggleFormModal()}
            onOk={(data) => notice.onSaveData(data)}
            operateType={operateType}
            formData={firstSelected}
          />
        )}
      </div>
    );
  }
}

NoticePage.propTypes = {};
export default NoticePage;
