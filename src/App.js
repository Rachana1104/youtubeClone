import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Videos from './components/Videos';
import Search from './components/Search'; 
import {
  BrowserRouter as Router
} from "react-router-dom";
 import { Route, Routes} from "react-router";

function App() {
  
  return (
    <Router>
    <div className="App">
      
      <Header/>
      
      <div className="App_page">
      <Routes>
        {/* <Route path="/search/:searchTerm" element={<SideBar/>}>
          </Route> */}
          <Route path="/search/:searchTerm" element={<Search/> }>
          </Route>
          {/* <Route path="/" element={<SideBar/>,<Videos/> }>
          </Route> */}
          {/* <Route path="/" element={<SideBar/> }>
          </Route>    */}
         </Routes>
         <SideBar/>
         <Videos/>
      </div>    
    </div>
    </Router>
  );
}

export default App;
