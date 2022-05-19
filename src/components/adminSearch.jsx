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

  
/*const DogList = ({dogList=[]}) => {
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
}*/
  
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

 /* const onFilter2=()=>{
    const filtered = dogListDefault.filter(listings => {
     return listings.age>=3;
     })
     console.log("Show filtered dog age over 3 ", filtered);
     setDogList(filtered);
  }
    const onFilter3=()=>{
    const filtered = dogListDefault.filter(listings => {
     return listings.sex==='F';
     })
     console.log("Show filtered dog sex is F ", filtered);

     setDogList(filtered);
  }
  
    const onFilter4=()=>{
    const filtered = dogListDefault.filter(listings => {
     return listings.sex==='M';
     })
     console.log("Show filtered dog sex is M: ", filtered);

     setDogList(filtered);
  }*/
   return (
    <>

      <SearchBar 
       input = {input} 
       setKeyword = {updateInput}
      />
    <br/> 
      <br/>
      {/*}             <Button onClick={onFilter2}> Filter Age bigger than 3 </Button> 
        <> </>    <Button onClick={onFilter3}> Filter Sex is Female </Button>  <> </>  <Button onClick={onFilter4}> Filter Sex is Male </Button>*/}
           
     			
      
           <PageHeader className="site-page-header"
            title="Canine Dogs Shelter - Dog List"
            subTitle="as below"/>
      
      <BlogGrid dogList = {dogList?dogList:[]} />    
    </>
   );
}

////  <filterdog />
    

export default SearchPage


/*7-5 for filter
 	const [press, setPress] = useState(false);
  	const [Clickvalue, setClickvalue] = useState();
	const onClick = ({ key }) => {
	let value;
	console.log(key);
	if ( key === '0'){
		value = 'Breed';
	}
	if ( key === '1'){
		value = 'Sex';
	}
	if ( key === '2'){
		value = 'Age';
	}
	if ( key === '3'){
		value = 'Location';
	}
	if ( key === '4'){
		setPress(false);
//		handleFilter('name');
		message.info(`Filter is cleared. Search is by Breed default`);
	}
  
	if ( key!== '4'){	
		message.info(`Filtering by ${value}`);
    console.log(`Filtering by ${value}`);
  setInput2 = `${value}` ;
  console.log("value of input2",setInput2);
	//	handleFilter(value);
	}
};

  
  /*const onSearch=value=>{
     const filtered = dogListDefault.filter(listings => {
     return listings.age>=2;
     })
     console.log("Show filtered dog info: ", filtered);
   //  setInput(input);
     setDogList(filtered);
    /*
         console.log("Show value: ", value);
     const filtered = dogListDefault.filter(listings => {
     return listings.age.toLowerCase().includes(input.toLowerCase())
     })
    // console.log("Show filtered dog info: ", filtered);
     setInput(input2);
     //setDogList(filtered);
  }*/
	//const onSearch = value => {
	//	isSearching.handleSearch(value)
    /* const updateInput2 = async (input2) => {
     console.log("Show input: ", input2);
     const filtered = dogListDefault.filter(listings => {
     return listings.name.toLowerCase().includes(input.toLowerCase())
     })
     console.log("Show filtered dog info: ", filtered2);
     setInput(input2);
     setDogList(filtered2);*/
//}
  /*
	const menu = (
  <Menu>
    {['Breed', 'Sex','Age',  'Location', 'Clear Filter'].map((value, i) => <Menu.Item  key={i}  onClick={!press && onClick } >{value}  </Menu.Item>)}
  </Menu>
);

   {/*for filter */
      /*		<Dropdown overlay={menu}>
						 <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Filter By <DownOutlined />
				</a>
				</Dropdown>

          <Search placeholder="Filter Bar - Default search by Age"
            allowClear
            enterButton="Search"
            size="small"
            style ={BarStyling}
            onSearch={onSearch}/>
              */
 