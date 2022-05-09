import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
//import DetailArticle from "./detailarticle2"
//import articles from './data/articles.json'
import http from '../common/http-common.js'
import { LoadingOutlined } from '@ant-design/icons';

/*
   <div className="App">
         <input type="text" placeholder="Search..."/>      
     </div> 
*/

function Dog() {  
  const [loading, setLoading] = React.useState(true)
  const [dogs, setDogs] = React.useState(null)
  //唔可以直接call  , asyc class 之
  
  React.useEffect(()=>{
//promise 有野先做, 有status code同Data
    /*  http.get('/articles',{data:{}})
有其他data 就好似date 咁加個body, 係common 內已define 左用json.    
*/
  http.get('/dogs')
    .then((response)=> {
      console.log(response)
      setDogs(response.data)
    })
    .then(()=>{ setLoading(false)})
    },[]);



  if(loading) {
    const antIcon = <LoadingOutlined style={{fontSize: 48}} spin />
    return (<Spin indicator={antIcon} />)
  } else {
  if(!dogs){
    return(
      <div>
      no dogs available now.
      </div>
    )
  } else {
 return (

   
   <Row justify="space-around">    
        { 
          dogs && 
            dogs.map(({id, name, age,shelterid,staffid,imageurl})=> (
              <Col span={8} key={id}>
                <Card title={name} style={{ width: 300 }} bordered={true}>       
                  <p>AGE: {age}</p>  
                  <p>Shelter ID: {shelterid}</p> 
                  <p>Staff ID: {staffid}</p> 
                  <img src={imageurl} /><br/>
                  <Link to={`/detaildog/${id}`}>Details </Link>
               <Link to={`/updatedog/${id}`}>Update & Delete </Link>

                </Card>
              </Col>))
        }
        </Row>);
     

  }
  }
  
  //               <Link to={`/deletedog/${id}`}>Delete</Link>
 
  //console.log(articles)
  
  /*    return (
        <Row justify="space-around">    
        { 
          articles && 
            articles.map(({id, title, fullText})=> (
              <Col span={8} key={id}>
                <Card title={title} style={{ width: 300 }} bordered={true}>       
                  <p>{fullText}</p>  
                  <p></p>
                  <Link to={`/a/${id}`}>Details</Link>
                </Card>
              </Col>))
        }
        </Row>);
  */
}

export default Dog;

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