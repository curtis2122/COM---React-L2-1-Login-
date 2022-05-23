import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
//import DetailArticle from "./detailarticle2"
//import articles from './data/articles.json'
import http from '../common/http-common.js';
import { LoadingOutlined } from '@ant-design/icons';
import { UserContext } from '../context/auth.jsx';
import { useContext } from 'react';

/*
   <div className="App">
         <input type="text" placeholder="Search..."/>      
     </div> 
*/

function User(props) {
	const [loading, setLoading] = React.useState(true);
	// 	const [isLoggedIn, setLoggedIn] = useState(true);
	const [users, setUsers] = React.useState();
	//    const {setAuthTokens} = useContext(UserContext);
	const { setUserRole, isLoggedIn, setAuthTokens } = useContext(UserContext);

  
	//    const userrole = localStorage.key("role");
	//  let userroles = JSON.parse(userrole);
	//const {setUsersTokens,isLoggedIn, setAuthTokens } = useContext(UserContext);
	//const {setAuthTokens} = useState('UserContext');
	//唔可以直接call  , asyc class 之
	//  const user = setAuthTokens.user;
	console.log('current user in UserContext is', users);
	//   console.log("new user token", setUsersTokens);
	console.log('user token', setAuthTokens);
	console.log('user Loggedin', isLoggedIn);
	console.log('what is user roles', setUserRole);
	//    console.log("user Loggedin",userroles);
	const token = localStorage.getItem('tokens');
	/* const LOCALSTORAGE_VALUES = {
  username: window.localStorage.getItem(token.username),
  password: window.localStorage.getItem(token.password)
};*/
	let savedToken = JSON.parse(token);
	let savedUserRole = JSON.parse(token)['role'];
	/*localStorage.desserts = JSON.stringify({choco: "waffle", fruit: "pancake", sweet: "donut"});
const favDessert = JSON.parse(localStorage.desserts)['choco']; // waffle
*/
	// const username = localStorage.getItem("tokens".username);

	React.useEffect(() => {
		/*
 const token = localStorage.getItem("token");
headers:{
				"Authorization": token,
				"Content-Type":"application/json"
			}
fetch('https://COMBlog28032022.curtiswang1.repl.co/api/v1/users/login', {
			method: 'POST',
			headers: {
				Authorization: 'Basic ' + btoa("candy45" + ':' + "test123")
			}
		})			
			.then(r => r.json())
			.catch(e => {
				setIsError(true);
			});
	*/
		/* 10-5
    http.get('/users')
    .then((response)=> {
      console.log(response)
      setUsers(response.data)
    })
    .then(()=>{ setLoading(false)})
    },[]);
*/

		let headers = new Headers();
		headers.append(
			'Authorization',
			'Basic ' + btoa(savedToken.username + ':' + savedToken.password)
		);
		headers.append('Content-Type', 'application/json');

		fetch('https://COMBlog28032022.curtiswang1.repl.co/api/v1/users/', {
			method: 'GET',
			headers: headers
			/*	headers:{
				"Authorization": token,
				"Content-Type":"application/json"
			}*/
		})
			.then(r => r.json())
			.then(result => {
				//	alert('Get User data success!');
				setUsers(result);
				console.log(token);
        
        console.log('user roles', setUserRole);
				//	 console.log(result);
				console.log(setUsers);
				console.log(savedUserRole);
			})
			.catch(e => {
				console.log(token);
				console.log(savedToken.username);
			//	console.log(savedUserRole);
				setIsError(true);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);
	//}

	if (loading) {
		const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
		return <Spin indicator={antIcon} />;
	} else {
		if (!users) {
			return <div>no users available now.</div>;
		} else {
			return (
				<Row justify="space-around">
					{users &&
						users.map(({ id, username, firstname, lastname, email, shelterid, role, avatarurl }) => (
							<Col span={8} key={id}>
								<Card title={username} style={{ width: 300 }} bordered={true}>
                  			<p>First Name: {firstname}</p>
                  			<p>Lastname: {lastname}</p>
									<p>Email: {email}</p>
									<p>Shelterid ID: {shelterid}</p>
									<p>User Role: {role}</p>
                   <img src={avatarurl} width="220" height="180" /><br />
									<p />

									<Link to={`/updateuser/${id}`}>Update or Delete </Link>
									<br />
									<Link to={`/resetpw/${id}`}>Reset pw </Link>
								</Card>
							</Col>
						))}
				</Row>
			);
		}
	}
}

export default User;

/*const [data,SetData] = useState(null)
      useEffect(()=>{
        const fetchData = async ()=>{
          setData(await getUserDate())
               }
      fetchData()
      },[])

      return data ?<updateform preloadedvalue={data}/>:  
      <div>Loading</div>
*/
