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

   /*     let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(savedToken.username + ":" + savedToken.password));
        headers.append('Content-Type', 'application/json');*/
  
  let headers = {
  'Content-Type': 'application/json',
  'Authorization':  'Basic ' + btoa(savedToken.username + ":" + savedToken.password)
}
 /* let headers = new http.headers().set('Authorization', 'Basic ' + btoa(savedToken.username + ":" + savedToken.password));
headers = headers.set('Content-Type', 'application/json');*/

	const onFinish = values => {
		console.log('Success reset password', values);
    
		const { confirm, ...data } = values;
		//  http.post('/articles',data)
		http
			.put(`/users/${aid}`, { 
    password: data.password,
      //  passwordhints: data.passwordhints//	shelterid: Number(data.shelterid)
				
			},{
    headers:headers})
			.then(response => {
				console.log(response.data);
				alert('Users updated password!');
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
			.get(`/users/${aid}`, {
    headers:headers})
			.then(response => {
				console.log(response);
				setUser(response.data);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

  
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
  
const PasswordhintsRules = [
    { required: false, message: 'Please input your Password hints!', whitespace: true }
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
					name="updatepw"
					{...formItemLayout}
					scrollToFirstError
					initialValues={user}
					onFinish={onFinish}
				>
          <br/>
               

        <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} hasFeedback>
            <Input.Password />
        </Form.Item>

     <Form.Item name="passwordhints" label="Passwordhints" rules={PasswordhintsRules}>
            <Input />
        </Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Update PW
						</Button>
					</Form.Item>
	
			
            						<Button
							type="primary"
							icon={<RollbackOutlined />}
							onClick={() => navigate(-1)}
						/>
			

				</Form>
			</>
		);
	}
}

//    <input type="text" value{this.state.value}
//      onChange={()=>  {this.setState({value:e.target.value })}}
//export default updateDog;

export default UpdateUser;
