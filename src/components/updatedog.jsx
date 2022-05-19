import React from 'react';
import { Form, Input, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import http from '../common/http-common';
import { RollbackOutlined } from '@ant-design/icons';
import NotFound from './notfound';

function UpdateDog(props) {
	// 	const { aid } = useParams();
	const { aid } = useParams();
	const [loading, setLoading] = React.useState(true);
	const [dog, setDog] = React.useState(null);
	const navigate = useNavigate();

	const onFinish = values => {
		console.log('Success updated dogs info', values);

		const { confirm, ...data } = values;
		//  http.post('/articles',data)
		http
			.put(`/dogs/${aid}`, {
				name: data.name,
				age: Number(data.age),
				sex: data.sex,
				shelterid: Number(data.shelterid),
				staffid: Number(data.staffid),
        imageurl: data.imageurl
			})
			.then(response => {
				console.log(response.data);
				alert('Dogs updated!');
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onFinish2 = values => {
		console.log('delete', values);

		// React.useEffect(()=> {
		http
			.delete(`/dogs/${aid}`, {}, {
        auth: {
          username: 'candy45',
          password: 'test123',
        }
    })
			.then(response => {
				console.log(response.data);
				alert('Dogs deleted!');
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
			.get(`/dogs/${aid}`)
			.then(response => {
				console.log(response);
				setDog(response.data);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

	const NameRules = [
		{ required: true, message: 'Please input your Dog Name!' }
	];
	const AgeRules = [{ required: true, message: 'Please input the dog Age ' }];
	const SexRules = [{ required: true, message: 'Please input Sex' }];
	const shelterIDRules = [
		{ required: true, message: 'Please input shelterID ID' }
	];
	/*const shelterIDRules = [
const shelterIDRules = [
		{ required: true, message: 'Please input shelterID ID', whitespace: true }
	];*/
	const StaffIDRules = [{ required: true, message: 'Please input staff ID' }];
  	const imageurlRules = [{ required: false, message: 'Please input iamge URL' }];
  
	const formItemLayout = {
		labelCol: { xs: { span: 24 }, sm: { span: 6 } },
		wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
	};
	const tailFormItemLayout = {
		wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } }
	};
	console.log(dog);

	if (loading) {
		return <div>loading...</div>;
	} else if (!dog) {
		return <div>There is no such dog.</div>;
	} else {
		// console.log(article)
		return (
			<>
				<Form
					name="updatedog"
					{...formItemLayout}
					scrollToFirstError
					initialValues={dog}
					onFinish={onFinish}
				>
					<Form.Item name="name" label="Name" rules={NameRules}>
						<Input />
					</Form.Item>

					<Form.Item name="age" label="Age" rules={AgeRules}>
						<Input />
					</Form.Item>
					<Form.Item name="sex" label="Sex" rules={SexRules}>
						<Input />
					</Form.Item>
					<Form.Item name="shelterid" label="Shelter ID" rules={shelterIDRules}>
						<Input />
					</Form.Item>
					<Form.Item name="staffid" label="Staff ID" rules={StaffIDRules}>
						<Input />
					</Form.Item>
          					<Form.Item name="imageurl" label="Image URL" rules={imageurlRules}>
						<Input />
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Update
						</Button>
					</Form.Item>
				</Form>
				<Form
					name="deletedog"
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

export default UpdateDog;
