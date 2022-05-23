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
    { required: true, min:0 ,max : 3,type: 'number',message: 'Please input shelterID ID', whitespace: true }
]
const StaffIDRules = [
    { required: true, min:0 ,max : 100,type: 'number', message: 'Please input staff ID', whitespace: true }
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

