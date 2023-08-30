
/**
 * Created by eaTong on 2023-01-19 .
 * Description: auto generated in  2023-01-19
 */

import React, {Component} from 'react';
import {Button, message ,Input} from 'antd';
import Reactable from "@eatong/reactable";
import ShareFormModal from "./ShareFormModal";
import {inject, observer} from "mobx-react";
import Title from "~/components/Title";
import PageBase from "~/components/PageBase";

const ButtonGroup = Button.Group;
const columns = [
  {title: '名称', key: 'name'},
];

@inject('share','app') @observer
class SharePage extends PageBase {
  async componentDidMount() {
    await this.props.share.getDataList();
  }

  render() {
    const {share} = this.props;
    const {dataList, operateType, showFormModal, selectedKeys, rowSelection, firstSelected , pagination} = share;
    return (
      <div className="base-layout share-page">
        <Title title='share管理'/>
        <div className="operate-bar">
          <Input.Search
            className={'search'}
            placeholder={'输入关键字搜索'}
            onSearch={(val) => share.searchData(val)}
          />
          
          <ButtonGroup className="buttons">
            <Button
              onClick={() => this.props.share.toggleFormModal('add')}
              disabled={this.disableButton('add')}
              type={'primary'}
            >
              新增
            </Button>
            <Button
              onClick={() => share.toggleFormModal('copyAdd')}
              disabled={this.disableButton('add', selectedKeys.length !== 1)}
            >
              复制并新增
            </Button>
            <Button
              onClick={() => this.props.share.toggleFormModal('edit')}
              disabled={this.disableButton('edit', selectedKeys.length !== 1)}
            >
              编辑
            </Button>
            <Button
              onClick={() => this.props.share.deleteData()}
              disabled={this.disableButton('delete', selectedKeys.length === 0)}
            >
              删除
            </Button>
            <Button
              onClick={() => this.props.share.toggleGrantModal()}
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
          tableId="share-table"
          pagination={share.pagination}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => share.onChangeSelection(keys)
          }}/>
        {showFormModal && (
          <ShareFormModal
            onCancel={() => share.toggleFormModal()}
            onOk={(data) => share.onSaveData(data)}
            operateType={operateType}
            formData={firstSelected}
          />
        )}
      </div>
    );
  }
}

SharePage.propTypes = {};
export default SharePage;
  