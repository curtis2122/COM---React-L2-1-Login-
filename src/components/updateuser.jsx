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

	const onFinish = values => {
		console.log('Success up', values);

		const { confirm, ...data } = values;
		//  http.post('/articles',data)
		http
			.put(`/users/${aid}`, { 
        email: data.email,
    password: data.password,
    username: data.username
			//	shelterid: Number(data.shelterid)
				
			})
			.then(response => {
				console.log(response.data);
				alert('Users up!');
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onFinish2 = values => {
		console.log('delete', values);

		// React.useEffect(()=> {
		http
			.delete(`/users/${aid}`)
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
			.get(`/users/${aid}`)
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

const usernameRules = [
    { required: true, message: 'Please input your username!', whitespace: true }
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
				 <Form.Item name="email" label="E-mail" rules={emailRules}>
            <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} hasFeedback>
            <Input.Password />
        </Form.Item>

        <Form.Item name="username" label="Username" rules={usernameRules}>
            <Input />
        </Form.Item>
          
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
