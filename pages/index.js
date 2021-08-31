import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';

const { Option } = Select

const Index = ({ children }) => {
  const [formData,setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    password: '',
    gender: ''
  })

  const onFinish = (values) => {
    console.log(values)
    setFormData(prevState => {
      prevState.name = values.name
      prevState.email = values.email
      prevState.tel = values.tel
      prevState.gender = values.gender
      return prevState
    })
  }

  return (
    <div style={{ marginTop: 10 }}>
      <Row justify="center">
        <Card style={{ width: 500 }}>
          <Form onFinish={onFinish} labelCol={{ span: 8 }}>
            <Form.Item name="name" label="Name" rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="E-Mail" rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}>
              <Input />
            </Form.Item>
            <Form.Item name="tel" label="Tel" rules={[
              {
                required: true,
                message: 'Please input your tel!',
              },
            ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select gender!',
                },
              ]}
            >
              <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Row justify="center">
                <Button type="primary" htmlType="submit">Submit</Button>
              </Row>
            </Form.Item>
          </Form>
          <Row gutter={8}>
            <Col>
              <span>Name:</span>
            </Col>
            <Col>
              <span>{formData.name}</span>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col>
              <span>Email:</span>
            </Col>
            <Col>
              <span>{formData.email}</span>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col>
              <span>Tel:</span>
            </Col>
            <Col>
              <span>{formData.tel}</span>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col>
              <span>Gender:</span>
            </Col>
            <Col>
              <span>{formData.gender}</span>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default Index;
