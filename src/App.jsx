import { Layout, Space } from 'antd';
import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Dashboard from './components/dashboard';
import About from './components/about';
import DetailDog from './components/detaildog.jsx';
//import FilterDog from './components/filter.jsx';
//
import Search from './components/searchPage.jsx';
//import Dog from './components/Dog.jsx';
import AddDogs from './components/AddDogs.jsx';
import Register from './components/register.jsx';
import UpdateDog from './components/updatedog.jsx';
import User from './components/user.jsx';
import Login from './components/login.jsx';
import NotFound from './components/notfound.jsx';
//import { AuthContext } from './context/auth.jsx';
import {UserContext} from './context/auth.jsx';

const { Header, Content, Footer } = Layout;


function App() {
  //function App(props) {
  
const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
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
						<Link to="/user">User</Link>
            <Link to="/AddDogs">AddDogs</Link>
            
						<Link to="/search">Search</Link>
						<Link to="/login">Login</Link>
					
					</Space>
				</nav>
			</Header>
      
   <UserContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Content>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/detaildog/:aid" element={<DetailDog />} />
					<Route path="/updatedog/:aid" element={<UpdateDog />} />

					<Route path="/register" element={<Register />} />
					<Route path="/user" element={<User />} />
	
          <Route path="/AddDogs" element={<AddDogs />} />
					<Route path="/search" element={<Search />} />
 					<Route path="/login" element={<Login />} />
 
          <Route path="*" element={<NotFound />} />
				</Routes>
			</Content>

			<Footer>
				<p>Canine Dogs Shelter (connected to Dog API )</p>
			</Footer>


    </UserContext.Provider>
		</Router>
	);
  
}
//for search div
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
