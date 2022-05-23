import { Layout, Space,Button } from 'antd';
import React,{ useState, useMemo, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from './components/home';
import Dashboard from './components/dashboard';
import About from './components/about';
import DetailDog from './components/detaildog.jsx';
//import FilterDog from './components/filter.jsx';
//
import PublicSearch from './components/publicSearch.jsx';
import AdminSearch from './components/adminSearch.jsx';
//import Dog from './components/Dog.jsx';
import AddDogs from './components/AddDogs.jsx';
import Register from './components/register.jsx';
import UpdateDog from './components/updatedog.jsx';
import UpdateUser from './components/updateuser.jsx';
import ResetPW from './components/resetpw.jsx';
import User from './components/user.jsx';
import Login from './components/login.jsx';
import NotFound from './components/notfound.jsx';
//import { AuthContext } from './context/auth.jsx';
import {UserContext} from './context/auth.jsx';

const { Header, Content, Footer } = Layout;


function App() {
  //function App(props) {
  
  const [authTokens, setAuthTokens] = useState(JSON.parse(localStorage.getItem("tokens")));
  const isLoggedIn = useMemo(() => Boolean(authTokens), [authTokens]);
  
if(isLoggedIn){
// const setUserRole = useMemo(() => Boolean(authTokens.role==='admin'),[authTokens.role]);
   const [UserRole, setUserRole] = JSON.parse(localStorage.getItem("tokens"))['role'];

 const isAdmin = Boolean;
 {if(UserRole==='admin'){setUserRole(true)}};
      console.log('user roles is admin ?', isAdmin);
//   const isUser = Boolean((setUserRole==='user'),true,false);
  //  console.log('user roles is user ?', isUser);
  
 }
  /*
   if(setUserRole==='admin'){
    ({isAdmin: true})
      console.log('user roles is amdin ?', isAdmin);
  };
//  if(isAdmin){setUserRole
 // if(isLoggedIn){
  /*
  let savedUserRole = JSON.parse(localStorage.getItem("tokens"))['role'];
    let savedUsername  = JSON.parse(localStorage.getItem("tokens"))['username'];*/
   // let UserRole = JSON.parse(localStorage.getItem("tokens"))['role'];
/*
  var isAdmin = ('False');
  if(savedUserRole=="admin"){
    ({isAdmin: true})
  };
  	console.log(' savedUserRole value', savedUserRole);
  	console.log('is admin value', isAdmin);*/
 // }
  //const isAdmin = Boolean(UserRole==='admin');
//  {isAdmin: true}
//const [UserRole, setUserRole] = useState(JSON.parse(localStorage.getItem("role")));;
//    const [isAdmin, setisAdmin] = useState(JSON.parse(localStorage.getItem("role")));
  //  const isAdmin = useMemo(() => Boolean(authTokens.role=='admin'), [authTokens]);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
 // console.log(isLoggedIn);
    const LogoutBut = () => {
//window.onload = window.localStorage.clear();
    localStorage.clear();
       window.location.reload();
       <Navigate to="/" />
//setAuthTokens=null;
  //    isLoggedIn=null;
    //    authTokens=null;
   //   setAuthTokens=false;
     // console.log(setAuthTokens);
  }
//"localStorage.clear()"
   
//  console.log("[token]")

  //usercontext包住的地可以讀取usercontext 資料
	return (

		<Router>
       
			<Header>
				<nav>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/about">About</Link>
						<Link to="/register">Register</Link>
           
            
            {isLoggedIn&&<Link to="/adminSearch">Update Dog</Link>}
             {isLoggedIn&&<Link to="/AddDogs">AddDogs</Link>}
            {isLoggedIn&&<Link to="/user">Manage User</Link>}
					 {!isLoggedIn&&<Link to="/login">Login</Link>}
            
										
             {isLoggedIn&& <Button onClick={LogoutBut}> Logout </Button>}    
            {/*<p color="red">username {savedUsername}</p> */}
					</Space>
				</nav>
			</Header>
      
      <UserContext.Provider value={{ authTokens, setAuthTokens: setTokens, isLoggedIn }}>
  
			<Content>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/detaildog/:aid" element={<DetailDog />} />
					<Route path="/updatedog/:aid" element={<UpdateDog />} />
					<Route path="/updateuser/:aid" element={<UpdateUser />} />
          	<Route path="/resetpw/:aid" element={<ResetPW />} />
					<Route path="/register" element={<Register />} />
          
					<Route path="/user" element={<User />} />
	
          <Route path="/AddDogs" element={<AddDogs />} />
					<Route path="/adminSearch" element={<AdminSearch />} />
          					<Route path="/publicSearch" element={<PublicSearch />} />
 					<Route path="/login" element={<Login />} />
 
          <Route path="*" element={<NotFound />} />
				</Routes>
			</Content>

			<Footer>
				<p>Canine Dogs Shelter (connected to Dog API )
          <br />
        Shelter Location 1. Coventry  ,
        2. Manchester  ,
        3. Lodon  </p>
			</Footer>


 </UserContext.Provider>
		</Router>
	);
  
}
//	<Route path="/register" element={<Register />} />
//for search div
/*
   if{isLoggedIn1&&<Link to="/AddDogs">AddDogs</Link>}
            if{isLoggedIn1&&<Link to="/user">Manage User</Link>}
						 if{!isLoggedIn1&&<Link to="/login">Login</Link>}
            
										
             if{isLoggedIn1&& <Button onClick={LogoutBut}> Logout </Button>}    

*/
//	<Link to="/user" element={isLoggedIn?(<Navigate to="/User" />):(<Navigate to="/login" />)}>Manage User</Link>
//			 if{!isLoggedIn&&<Link to="/login">Login</Link>}
//  <Route path="/AddDogs" element={isLoggedIn?(<Navigate to="/AddDogs" />):(<Navigate to="/login" />)} />
// 
  // 
//  <Route path="/a/:aid" element={ <DetailArticle /> } />   /*  <div className="App">
/*     <div className="App">
     <input type="text" placeholder="Search..."/>
        </div>      
<Route path="/dog" element={<Dog />} />
<input type="text" placeholder="Search..."/>
          {
            Article.map((val, key)=>{
              return <div>{
                val.alltext
              })
                }
                            </div>
                      }
     </div>
       <SearchBar placeholder="Enter a  Name..." data={Article} />
	<div className="ui search">
							<input type="text" placeholder="Search..." className="prompt" />
						</div>
                        */

export default App;
