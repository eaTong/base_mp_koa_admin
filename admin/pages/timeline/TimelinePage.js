
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

import React, {Component} from 'react';
import {Button, message ,Input} from 'antd';
import Reactable from "@eatong/reactable";
import TimelineFormModal from "./TimelineFormModal";
import {inject, observer} from "mobx-react";
import Title from "~/components/Title";
import PageBase from "~/components/PageBase";

const ButtonGroup = Button.Group;
const columns = [
  {title: '名称', key: 'name'},
  {title: '描述', key: 'description'},
  {title: '封面', key: 'logo'},
  {title: '图片', key: 'attachment',render:(t)=>`图片*${t.length}`},
];

@inject('timeline','app') @observer
class TimelinePage extends PageBase {
  async componentDidMount() {
    await this.props.timeline.getDataList();
  }

  render() {
    const {timeline} = this.props;
    const {dataList, operateType, showFormModal, selectedKeys, rowSelection, firstSelected , pagination} = timeline;
    return (
      <div className="base-layout timeline-page">
        <Title title='时间轴管理'/>
        <div className="operate-bar">
          <Input.Search
            className={'search'}
            placeholder={'输入关键字搜索'}
            onSearch={(val) => timeline.searchData(val)}
          />

          <ButtonGroup className="buttons">
            <Button
              onClick={() => this.props.timeline.toggleFormModal('add')}
              disabled={this.disableButton('add')}
              type={'primary'}
            >
              新增
            </Button>
            <Button
              onClick={() => timeline.toggleFormModal('copyAdd')}
              disabled={this.disableButton('add', selectedKeys.length !== 1)}
            >
              复制并新增
            </Button>
            <Button
              onClick={() => this.props.timeline.toggleFormModal('edit')}
              disabled={this.disableButton('edit', selectedKeys.length !== 1)}
            >
              编辑
            </Button>
            <Button
              onClick={() => this.props.timeline.deleteData()}
              disabled={this.disableButton('delete', selectedKeys.length === 0)}
            >
              删除
            </Button>
          </ButtonGroup>
        </div>
        <Reactable
          columns={columns}
          dataSource={dataList}
          rowKey="id"
          tableId="timeline-table"
          pagination={timeline.pagination}
          rowSelection={{
            selectedRowKeys: selectedKeys,
            onChange: (keys) => timeline.onChangeSelection(keys)
          }}/>
        {showFormModal && (
          <TimelineFormModal
            onCancel={() => timeline.toggleFormModal()}
            onOk={(data) => timeline.onSaveData(data)}
            operateType={operateType}
            formData={firstSelected}
          />
        )}
      </div>
    );
  }
}

TimelinePage.propTypes = {};
export default TimelinePage;
