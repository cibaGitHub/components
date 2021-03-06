import React from 'react';
import { Form, Button } from 'antd';
import ATreeSelect from '..';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
        key: '0-0-1',
        disabled: true,
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
  },
};
const styles = {
  width: '100%',
};

const WidgetWithForm = ({ form }) => {
  function onChange(value, node) {
    // console.log(value, node);
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
      <ATreeSelect
        name="demo3"
        label="节点"
        form={form}
        rules={[
          {
            required: true,
            message: ' ATreeSelect!',
          },
        ]}
        treeData={treeData}
        treeCheckParentStrictly
        widgetProps={{
          style: styles,
          placeholder: '请选择',
          allowClear: true,
          searchPlaceholder: 'Please select',
          treeCheckable: true,
          treeCheckStrictly: true,
          // showCheckedStrategy: TreeSelect.SHOW_ALL,
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
