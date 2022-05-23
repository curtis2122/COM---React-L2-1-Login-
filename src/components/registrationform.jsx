import React from "react";
import { Form, Input, Button } from 'antd';
import http from '../common/http-common'

function onFinish(values) {
  console.log("Success", values)
    
  // 
  
  const {confirm, ...data} = values;
  //http.post('/users', data)
  //if check 
 if(values.code2 == '8008'){
  http.post('/users', {
    email: data.email,
    password: data.password,
    username: data.username,
           avatarurl:data.avatarurl,
    	shelterid: Number(data.shelterid),
        lastname: data.lastname,
    firstname: data.firstname,
    role: 'admin'})
    .then((response)=>{
    console.log(response.data)
    alert('Employee created!');
  })
  .catch((err)=>{
    console.log(err)
  })
 }
    else{
      http.post('/users',  {
    email: data.email,
    password: data.password,
    username: data.username,
       avatarurl:data.avatarurl,
        	shelterid: Number(data.shelterid),
       lastname: data.lastname,
    firstname: data.firstname,
    role: 'user'})
       .then((response)=>{
    console.log(response.data)
    alert('User created!');
  })
  .catch((err)=>{
    console.log(err)
  })
            }
  
}

/*works
   http.post('/users', data)
      
   .then((response)=>{
    console.log(response.data)
    alert('User created!');
  })
  .catch((err)=>{
    console.log(err)
  })}
*/


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
const shelteridRules = [
    { required: false, message: 'Please input shelterid !', whitespace: true }
]
const ImageRules = [
    { required: false, message: 'Please input Image Link', whitespace: true }
]
const usernameRules = [
    { required: true, message: 'Please input your username!', whitespace: true }
]

const firstnameRules = [
    { required: true, message: 'Please input your firstname!', whitespace: true }
]
  const lastnameRules = [
    { required: true, message: 'Please input your  lastname!', whitespace: true }
]
const codeRules = [
    { required: false, message: 'Please input your code!', whitespace: true }
]

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};


function RegistrationForm() {  
  return (
    <Form name="register" {...formItemLayout} scrollToFirstError onFinish={onFinish}>

              <Form.Item name="username" label="Username" rules={usernameRules}>
            <Input />
        </Form.Item>
                 <Form.Item name="firstname" label="first Name" rules={firstnameRules}>
            <Input />
        </Form.Item>
          
            <Form.Item name="lastname" label="Last name" rules={lastnameRules}>
            <Input />
        </Form.Item>
        <Form.Item name="email" label="E-mail" rules={emailRules}>
            <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} hasFeedback>
            <Input.Password />
        </Form.Item>
       <Form.Item name="shelterid" label="Shelter id " rules={shelteridRules}>
            <Input />
        </Form.Item>
          
         <Form.Item name="avatarurl" label="Image Url" rules={ImageRules}>
            <Input />
        </Form.Item>

        <Form.Item name="code2" label="Special code" rules={codeRules}>
            <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
      </Form>

  );    
}  

export default RegistrationForm;

