import React from 'react';
import { Form, Input, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import http from '../common/http-common';
import { RollbackOutlined } from '@ant-design/icons';
import NotFound from './notfound';

function UpdateUser(props) {
	// 	const { aid } = useParams();
	const { aid } = useParams();
	const [loading, setLoading] = React.useState(true);
	const [user, setUser] = React.useState(null);
	const navigate = useNavigate();

   const token = localStorage.getItem("tokens");

 let savedToken = JSON.parse(token);
//  const userrole = localStorage.getItem("role"); 
   /*     let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(savedToken.username + ":" + savedToken.password));
        headers.append('Content-Type', 'application/json');*/
  
 /* let headers = {
  'Content-Type': 'application/json',
  'Authorization':  'Basic ' + btoa(savedToken.username + ":" + savedToken.password)
}*/
 /* let headers = new http.headers().set('Authorization', 'Basic ' + btoa(savedToken.username + ":" + savedToken.password));
headers = headers.set('Content-Type', 'application/json');*/

	const onFinish = values => {
		console.log('Success update', values);
    
		const { confirm, ...data } = values;
	
		http
			.put(`/users/${aid}`, { 
        email: data.email,
   // password: data.password,
              avatarurl:data.avatarurl,
        username: data.username,
        lastname: data.lastname,
    firstname: data.firstname,
				shelterid: Number(data.shelterid)
				
			},{
        //    headers:headers})
        
        auth: {
          username: 'candy45',
          password: 'test123',
        }
            })
			.then(response => {
				console.log(response.data);
				alert('User info is updated!');
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onFinish2 = values => {
		console.log('delete', values);

		// React.useEffect(()=> {
		http
	/*		.delete(`/users/${aid}`,{
   headers:headers})*/
      .delete(`/users/${aid}`, {
        auth: {
          username: 'candy45',
          password: 'test123',
        }
            })
			.then(response => {
				console.log(response.data);
				alert('Users delete!');
			})
			.then(() => {
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	//useEffect(() => {
	// DELETE request using axios with error handling
	/*
             axios.delete(`/dogs/${aid}`)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

}
*/

	React.useEffect(() => {
		http
			.get(`/users/${aid}`,
           /*{
    headers:headers})*/
            {
        auth: {
          username: 'candy45',
          password: 'test123',
        }
            })
			.then(response => {
				console.log(response);
				setUser(response.data);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

const emailRules = [
    {type: 'email', message: 'The input is not valid E-mail!'},
    {required: true, message: 'Please input your E-mail!' }
];
/*
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

const usernameRules = [
    { required: true, message: 'Please input your username!', whitespace: true }
]
const firstnameRules = [
    { required: true, message: 'Please input your firstname!', whitespace: true }
]
  const lastnameRules = [
    { required: true, message: 'Please input your  lastname!', whitespace: true }
]
  
const shelteridRules = [
    { required: false, message: 'Please input your shelterid!', whitespace: true }
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


  
	console.log(user);

  

	if (loading) {
		return <div>loading...</div>;
	} else if (!user) {
		return <div>There is no such user.</div>;
	} else {
		// console.log(article)
		return (
			<>
				<Form
					name="updateuser"
					{...formItemLayout}
					scrollToFirstError
					initialValues={user}
					onFinish={onFinish}
				>
          <br/>
                  <Form.Item name="username" label="Username" rules={usernameRules}>
            <Input disabled={true}/>
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
          
            <Form.Item name="shelterid" label="Shelter id " rules={shelteridRules}>
            <Input />
        </Form.Item>
          
           <Form.Item name="avatarurl" label="Image Url" rules={ImageRules}>
            <Input />
        </Form.Item>
          { /*
        <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} hasFeedback>
            <Input.Password />
        </Form.Item>*/}
        


					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Update
						</Button>
					</Form.Item>
          
				</Form>
				<Form
					name="deleteuser"
					{...formItemLayout}
					scrollToFirstError
					//    initialValues={dog}
					onFinish={onFinish2}
				>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Delete
						</Button>
          <div> </div>
            						<Button
							type="primary"
							icon={<RollbackOutlined />}
							onClick={() => navigate(-1)}
						/>
					</Form.Item>

				</Form>
			</>
		);
	}
}

//    <input type="text" value{this.state.value}
//      onChange={()=>  {this.setState({value:e.target.value })}}
//export default updateDog;

export default UpdateUser;
