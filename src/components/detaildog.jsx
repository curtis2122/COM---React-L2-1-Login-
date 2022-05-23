import React from 'react';
//import articles from './data/articles.json';
import http from '../common/http-common.js'
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import NotFound from './notfound'

function DetailDog(props) {    
  const { aid } = useParams();  
  const [loading, setLoading] = React.useState(true)
  const [dog, setDog] = React.useState(null)
  const navigate = useNavigate();

   React.useEffect(()=> {
    http.get(`/dogs/${aid}`)
      .then((response)=> {
      console.log(response)
      setDog(response.data)
    })
   .then(()=>{ setLoading(false)})
    },[]);


 if (loading) {
   return <div>loading...</div>;} 
 else if(!dog) {
    return (
      <div>There is no such dog.</div>
    )
  } else {
   
    return (
        <>    
          <h1>Name: {dog.name}</h1>
          <p>Age:{dog.age}</p>      
          <p>Sex:{dog.sex}</p>      
          <p>Shelter ID: {dog.shelterid}</p>      
          <p>Staff ID: {dog.staffid}</p>      
            Image :<img src={dog.imageurl} /><br/>
          <Button type="primary" icon={<RollbackOutlined />} onClick={()=>navigate(-1)} />
        </>
      )
  }
  
}

export default DetailDog;
