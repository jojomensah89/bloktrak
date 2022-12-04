import React,{useState, useEffect} from "react"
import {
  connectWallet,
  
 
} from "../utils/tasks"
import {
    BrowserRouter as Router,Link,
  } from "react-router-dom";
import "../styles/navbar.css";
import Bloktrak from "../media/Bloktrak logo.svg";
 
  

function NavBar (){
  const [walletAddress, setWallet] = useState("");
  

  
  const connectToWallet = async () => {
     const walletResponse = await connectWallet();
  setWallet(walletResponse.address);
  }
  
    return(
        <>

        <header className="">
          
         <nav className="navbar">
           
             <Link to="/">  
            <img src={Bloktrak} alt={Bloktrak}  />

            </Link>
            
            
            <ul className='nav-links '> 
              <li>
                <Link to="/about" style={{textDecoration:"none"}}>About</Link>
              </li>
              
              <li>
                <Link to="/marketplace" style={{textDecoration:"none"}}>Marketplace</Link>
              </li>
                     
              <li>
                <Link to="/learn" style={{textDecoration:"none"}}>Learn</Link>
              </li>

              </ul>
             <div>
                 <button className="connectWallet " onClick={connectToWallet}>
                  {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
                 </button>  
             </div>   
          
              
         </nav>
        
        

        </header>
        



        </>
    )
}
export {NavBar}