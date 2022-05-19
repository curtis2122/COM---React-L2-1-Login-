import React from "react";
import { Form, Input, InputNumber, Button } from 'antd';
import http from '../common/http-common'




function onFinish(values) {
  console.log("Success", values)

  const {confirm, ...data} = values;
  //  http.post('/articles',data)
  http.post('/dogs', {
    name: data.name,
    age: Number(data.age),
    breed: data.breed,
    sex: data.sex,
    shelterid: Number(data.shelterid),
    staffid: Number(data.staffid),
    imageurl:data.imageurl
  })
  .then((response)=>{
    console.log(response.data)
    alert("Dogs Created!");
  })
  .catch((err)=>{
    console.log(err)
  })
}
/*
const emailRules = [
    {type: 'email', message: 'The input is not valid E-mail!'},
    {required: true, message: 'Please input your E-mail!' }
];

const passwordRules = [
    { required: true, message: 'Please input your password!' }
];

const confirmRules = [
    { required: true, message: 'Please confirm your password!' },
    ({ getFieldValue }) => ({
        validator(rule, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject('The passwords that you entered do not match!');
        }
    })
];
*/

const NameRules = [
    { required: true, message: 'Please input your Dog Name!', whitespace: true }
]
const AgeRules = [
    { required: true, type: 'number',message: 'Please input the dog Age ', whitespace: true }
]
const BreedRules = [
    { required: true, message: 'Please input your Dog Breed!', whitespace: true }
]
const SexRules = [
    { required: true, max : 1,type:'string', message: 'Please input Sex, only a letter M or F', whitespace: true }
]
const shelterIDRules = [
    { required: true, max : 2,type: 'number',message: 'Please input shelterID ID', whitespace: true }
]
const StaffIDRules = [
    { required: true, max : 3,type: 'number', message: 'Please input staff ID', whitespace: true }
]
const ImageRules = [
    { required: false, message: 'Please input Image Link', whitespace: true }
]
const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};


function AddDogform() {  
  return (
    <Form name="register" {...formItemLayout} scrollToFirstError onFinish={onFinish}>
        

        <Form.Item name="name" label="Name" rules={NameRules}>
            <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={AgeRules}>
            <InputNumber />
        </Form.Item>
       <Form.Item name="breed" label="Breed" rules={BreedRules}>
            <Input />
        </Form.Item>
              <Form.Item name="sex" label="Sex" rules={SexRules}>
            <Input />
                    </Form.Item>
               <Form.Item name="shelterid" label="shelter ID" rules={shelterIDRules}>
           <InputNumber />
            </Form.Item>
               <Form.Item name="staffid" label="staff ID" rules={StaffIDRules}>
            <InputNumber />
        </Form.Item>
                  <Form.Item name="imageurl" label="Image Url" rules={ImageRules}>
            <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Add Dog form
            </Button>
        </Form.Item>
      </Form>

  );    
}  

export default AddDogform;

/*
        <Form.Item name="email" label="E-mail" rules={emailRules}>
            <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} hasFeedback>
            <Input.Password />
        </Form.Item>
*/