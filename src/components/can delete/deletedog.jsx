import React from 'react';
//import articles from './data/articles.json';
import http from '../common/http-common.js'
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import NotFound from './notfound'


const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};


function DeleteDog(props) {    
  const { aid } = useParams();  
  const [loading, setLoading] = React.useState(true)
  const [dog, setDog] = React.useState(null)
  const navigate = useNavigate();
//  const DogId = {
  
  const onFinish=(values)=> {
/*  console.log("delete", values)
  
  React.useEffect(()=> {
  http.del(`/dogs/${aid}`)
      .then((response)=> {
      console.log(response)
      setDog(response.data)
    })
   .then(()=>{ setLoading(false)})
      },[]);}
*/

    console.log("Success", values)

 // const {confirm, ...data} = values;
  //  http.post('/articles',data)
  http.del('/dogs/${aid}')
  .then((response)=>{
    console.log(response.data)
    alert("Dogs del!");
  })
  .catch((err)=>{
    console.log(err)
  })
}


  
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
   // console.log(article)
    return (
        <>    
          <h1>{dog.name}</h1>
          <p>{dog.age}</p>      
          <p>{dog.sex}</p>      
          <p>{dog.shelterid}</p>      
          <p>{dog.staffid}</p>      

          <Button type="primary" icon={<RollbackOutlined />} onClick={()=>navigate(-1)} />

        <Form name="delete" {...formItemLayout} scrollToFirstError onFinish={onFinish}>
         <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Delete Dog
            </Button>
        </Form.Item>
      </Form>
        </>
      )
  }
  /*
  for(const article of articles) {  
  if(article.id==aid)  {      
      return(
        <>    
          <h1>{article.title}</h1>
          <p>{article.fullText}</p>            
          <Button type="primary" icon={<RollbackOutlined />} onClick={()=>navigate(-1)} />
        </>
      );
    }
  }
  */
}

export default DeleteDog;
