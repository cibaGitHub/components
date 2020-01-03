import React from 'react';
import { Form, Button } from 'antd';
import AInput from '..';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const styles = {
  width: 120,
};

const WidgetWithForm = ({ form }) => {
  function onChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <AInput
        name="ainput1"
        label="AInput"
        form={form}
        initialValue={3}
        rules={[
          {
            required: true,
            message: ' AInput!',
          },
        ]}
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          allowClear: true,
          onChange,
        }}
      />

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(WidgetWithForm);
