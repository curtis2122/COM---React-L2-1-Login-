import React, { useState, useEffect } from 'react';
//import SearchBar from './searchBar';
import BlogGrid from './BlogGrid';
import { PageHeader } from 'antd';
 import { Menu,Button, Dropdown, message, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
//7-5
//const { Search } = Input;
const { Search } = Input;

const BarStyling = {width:"50em",background:"#F1F3F1",  borderRadius: "30", padding:"0.8em"};

const SearchBar = ({keyword, setKeyword}) => {

  return (
    <input 
     style = {BarStyling}
     key = "random1"
     value = {keyword}
     placeholder = {"Search Dog By name...."}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

  
  
const SearchPage = (props) => {
  const [input, setInput] = useState(''); //get the user input
   //const [input2, setInput2] = useState('');
  const [dogListDefault, setDogListDefault] = useState(); 
  const [dogList, setDogList] = useState();

  const fetchDogData = async () => {
    return await fetch('https://COMBlog28032022.curtiswang1.repl.co/api/v1/dogs')
      .then(response => response.json())
      .then(data => {
         setDogList(data) 
         setDogListDefault(data)
       });}

  const updateInput = async (input) => {
     console.log("Show input: ", input);
     const filtered = dogListDefault.filter(listings => {
     return listings.name.toLowerCase().includes(input.toLowerCase())
     })
     console.log("Show filtered dog info: ", filtered);
     setInput(input);
     setDogList(filtered);
    
  }
  
  useEffect( () => {fetchDogData()}, []);

 
   return (
    <>

      <SearchBar 
       input = {input} 
       setKeyword = {updateInput}
      />
    <br/> 
      <br/>
     
           
     			
      
           <PageHeader className="site-page-header"
            title="Canine Dogs Shelter - Dog List"
            subTitle="as below"/>
      
      <BlogGrid dogList = {dogList?dogList:[]} />    
    </>
   );
}


export default SearchPage

