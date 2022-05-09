import React, { useState, useEffect } from 'react';
//import SearchBar from './searchBar';
import BlogGrid from './BlogGrid';
import { PageHeader } from 'antd';
 import { Menu, Dropdown, message, Space, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
//7-5
//const { Search } = Input;
const { Search } = Input;

const SearchBar = ({keyword, setKeyword}) => {
  const BarStyling = {width:"50rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
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

  
const DogList = ({dogList=[]}) => {
  return (
    <>
    { dogList.map((data,index) => {
        if (data) {
          return (
            <div key={data.breeds}>
              <h1>{data.breeds}</h1>
	    </div>	
    	   )	
    	 }
      else{
        <div>no data found</div>
      }
    	 return null
    }) }
    </>
  );
}
  
const SearchPage = (props) => {
  const [input, setInput] = useState(''); //input: user input
  const [dogListDefault, setDogListDefault] = useState(); 
  const [dogList, setDogList] = useState();

  const fetchData = async () => {
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
     console.log("Show filtered: ", filtered);
     setInput(input);
     setDogList(filtered);
    
  }

 
  useEffect( () => {fetchData()}, []);

//7-5
 	const [press, setPress] = useState(false);
	const onClick = ({ key }) => {
	let value;
	console.log(key);
	if ( key === '0'){
		value = 'Age';
	}
	if ( key === '1'){
		value = 'Breed';
	}
	if ( key === '2'){
		value = 'Sex';
	}
	if ( key === '3'){
		value = 'Location';
	}
	if ( key === '4'){
		setPress(false);
		handleFilter('name');
		message.info(`Filter is cleared. Search is by name default`);
	}
  
	if ( key!== '4'){	
		message.info(`Filtering by ${value}`);
		handleFilter(value);
	}
};
	const onSearch = value => {
	//	isSearching.handleSearch(value)
	}
	const menu = (
  <Menu>
    {['Age', 'Breed', 'Sex', 'Location', 'Clear Filter'].map((value, i) => <Menu.Item  key={i}  onClick={!press && onClick } >{value}  </Menu.Item>)}
  </Menu>
);
  
  return (
    <>
      <SearchBar 
       input = {input} 
       setKeyword = {updateInput}
      />


      
          <Search placeholder="Search your new friend! Default search by Name"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}/>
          
      					<Dropdown overlay={menu}>
						 <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Filter By <DownOutlined />
				</a>
				</Dropdown>
      
           <PageHeader className="site-page-header"
            title="Canine Dogs Shelter"
            subTitle="Where dogs are preserved"/>
      
      <BlogGrid dogList = {dogList?dogList:[]} />    
    </>
   );
}

////  <filterdog />
    

export default SearchPage