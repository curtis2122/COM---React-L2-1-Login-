import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
//import DetailArticle from "./detailarticle2"
//import articles from './data/articles.json'
import http from '../common/http-common.js'
import { LoadingOutlined } from '@ant-design/icons';
import {UserContext} from '../context/auth.jsx';
import {useContext} from 'react';

/*
   <div className="App">
         <input type="text" placeholder="Search..."/>      
     </div> 
*/

function User(props) {  
    const [loading, setLoading] = React.useState(true)
  	const [isLoggedIn, setLoggedIn] = useState(true);
    const [users, setUsers] = React.useState()
    const {setAuthTokens} = useState('UserContext');
  //唔可以直接call  , asyc class 之
 console.log("current user in UserContext is", users);
   console.log("user token", setAuthTokens);
     console.log("user token", isLoggedIn);
  
  React.useEffect(()=>{
//promise 有野先做, 有status code同Data
    /*  http.get('/articles',{data:{}})
有其他data 就好似date 咁加個body, 係common 內已define 左用json.    
*/
  http.get('/users')
    .then((response)=> {
      console.log(response)
      setUsers(response.data)
    })
    .then(()=>{ setLoading(false)})
    },[]);



  if(loading) {
    const antIcon = <LoadingOutlined style={{fontSize: 48}} spin />
    return (<Spin indicator={antIcon} />)
  } else {
  if(!users){
    return(
      <div>
      no users available now.
      </div>
    )
  } else {
 return (

   
   <Row justify="space-around">    
        { 
          users && 
            users.map(({id, username,email ,shelterid})=> (
              <Col span={8} key={id}>
                <Card title={username} style={{ width: 300 }} bordered={true}>       
                  <p>email: {email}</p>  
                  <p>shelterid ID: {shelterid}</p> 
              
                  <p></p>
          
               <Link to={`/updateuser/${id}`}>Update & Delete </Link>

                </Card>
              </Col>))
        }
        </Row>);
     

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