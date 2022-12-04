
import { Link } from "react-router-dom";
import { useState,useRef, useEffect,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons'
import img2 from "../Images/bloktracklogo.svg"
import './NavBar.css'
import { LandContext } from "../../Context/TransactionContext";


function NavBar(){   

   const {connectWallet} = useContext(LandContext);
  

    return <> 

              <div className="blockNavWhole"> 
                 <div className="Blogo">
                  <h1>BK</h1>
                  {/* <img src={img2}/> */}
                 </div>
                 <div className="BLinks">
                  <ul>
                    <li>About</li>
                    <li>Marketplace</li>
                    <li>Learn <FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></li>
                 
                  </ul>
                 </div>
                 <div className="Bbutton" onClick={connectWallet}>
                   
                      <FontAwesomeIcon icon={faUser} className="FontAwesomeIconone"/><p>User ID </p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/>
              
                 </div>


              </div>
        
            
            
            
          </>

}

export default NavBar;