
import {useEffect, useState} from 'react'
// import SideBar from './Components/SideBar/SideBar';
import {Routes,Route,} from "react-router-dom"
import Overview from './Components/Overview/Overview';
import Settings from './Components/Settings/Settings';
import Marketplace from './Pages/Marketplace/Marketplace';
import KYC from './Pages/KYC/KYC';
import {Home} from "../src/Components/Home"
import AddProp from './Components/AddProp/AddProp';
import SideBar from './Components/SideBar/SideBar';
// import {NavBar} from "../src/Components/Navbar"
// import {MarketPlace} from "./components/marketplace"
// import{Marketplace} from "../src/Components/Home"
// import {About} from "./components/about"

// import {Learn} from "./learn"
// import {Learn} from "../src/Components/"
// import "./App.css"

// import {APIURL,
//   LENS_HUB_CONTRACT_ADDRESS,
//   queryRecommendedPublications,
//   queryRecommendedPublications,
//   urlClient
// } from "./Queries"; 

// import LENSHUB from "./Lenshub"
// import { ethers } from 'ethers';

function App() {
  return (
    // <div className="App"> 
          
    //       HELLO
    // </div>  
    <> 
     {/* <div className='wholeDash'>
        <SideBar/> */}
      
          {/* <NavBar/> */}
          <Routes>
               <Route index path="overview" element={<Overview />}>
                     
              </Route> 

            <Route path="about" element={<Settings />}>
               
            </Route>
            <Route path="/marketplace" element={<Marketplace />}>
               
            </Route>
             <Route path="/" element={<Home />}> 
               
            </Route> 
            <Route path="/KYC" element={<KYC />}>
               
            </Route>
            <Route path="/addprop" element={<AddProp />}>
               
            </Route>
            <Route path="/dashboard" element={<SideBar />}>
               
            </Route>
                 
          </Routes> 
          {/* </div> */}

    </>
  );
}

export default App;
