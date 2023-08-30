
/**
 * Created by eaTong on 2022-12-10 .
 * Description: auto generated in  2022-12-10
 */

  import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Form, Input, message} from 'antd';
import {GLOBAL_LAYOUT} from '~/utils/constants';
import ImageUploader from "../../components/ImageUploader";
import AttachmentUploader from "../../components/AttachmentUploader";

const FormItem = Form.Item;

class TimelineFormModal extends Component {
  componentDidMount() {
    if (/(edit)|(copyAdd)/.test(this.props.operateType)) {
      this.props.form.setFieldsValue(this.props.formData);
    }
  }

  onSaveData() {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      }
      this.props.onOk && this.props.onOk(values);
    });
  }

  render() {
    const {operateType} = this.props;
    const {getFieldDecorator} = this.props.form;
    return (
      <Modal title={(operateType === 'add' ? '新增' : '编辑') + '时间轴'}
             maskClosable={false}
             visible={true} onOk={this.onSaveData.bind(this)} onCancel={this.props.onCancel}>
        <Form>
          <FormItem
            {...GLOBAL_LAYOUT}
            label="时间轴名称"
            hasFeedback>
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请填写名称!',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem {...GLOBAL_LAYOUT} label="封面">
            {getFieldDecorator('logo', {
              rules: [{
                required: true, message: '请上传封面!',
              }],
            })(<ImageUploader maxCount={1}/>)}
          </FormItem>
          <FormItem
            {...GLOBAL_LAYOUT}
            label="描述"
            hasFeedback>
            {getFieldDecorator('description', {
              rules: [{
                required: true, message: '请填写描述!',
              }],
            })(
              <Input.TextArea/>
            )}
          </FormItem>

          <FormItem {...GLOBAL_LAYOUT} label="配图">
            {getFieldDecorator('attachment', {
              rules: [{
                required: true, message: '请上传配图!',
              }],
            })(<ImageUploader/>)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

TimelineFormModal.propTypes = {
  operateType: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  formData: PropTypes.object
};
TimelineFormModal = Form.create()(TimelineFormModal);
export default TimelineFormModal;
