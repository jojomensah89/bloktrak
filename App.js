import React,{useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./components/Home"
import {MarketPlace} from "./components/marketplace"
import {About} from "./components/about"
import {NavBar} from "./components/Navbar"
import {Learn} from "./learn"
import './Styles/app.css';


function App() {
  return(
    <>
    
    
    <Router>
    <NavBar />
    <Routes>
      <Route  path="/" element={<Home/>} exact/>
      <Route  path="/about" element={<About/>} />
      <Route  path="/marketplace" element={<MarketPlace/>}/>
      <Route  path="/learn" element={<Learn/>}></Route>

    </Routes>
    </Router>
    </>
  );
}

export default App;
