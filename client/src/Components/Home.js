import React from "react";
import "../styles/home.css";


import polygon from "../media/Polygon logo.svg"
import chainlink from "../media/Chainlink Logo Blue 1.svg"
import xfinance from "../media/XF Primary HD Logo - Full 1.svg"
import alchemy from "../media/alchemy-logo-blue-gradient 1.svg"
import images from "../media/images.jpg";




const options = [
  { value: 'chocolate', label: 'Chocolate' },
  

  
];

function Home (){
    return(
       <main>
          <div className="hero-section">
            <div>
            <p className="hero1">List Verify Sell</p>
             <h1 className="hero2">It’s now easier than ever
             to list and verify real estate properties in Africa!</h1>   
            </div>            
            <div className="hero-button">
              <button  className="getStartedBtn" type="button">Get started for free</button>
              <button className="Documentation" type="button">Read Documentation</button>
            </div>         
          </div>

          <div className="partners-logo">
            <div>
              <img className="partlogo" src={polygon} alt={polygon}></img>
            </div>
            <div>
              <img className="partlogo" src={chainlink} alt={chainlink}></img>
            </div>
            <div>
              <img className="partlogo" src={xfinance} alt={xfinance}></img>
            </div>
            <div>
              <img className="partlogo" src={alchemy} alt={alchemy}></img>
            </div>
          </div>
          <div className="container">
            <div className="guidelinesBg">
              <div className="howItWorks">
                <h1 class="seeHowItWorks">See how it works!</h1>
                <ul>
                  <li>Connect your Metamask wallet</li>
                  <li>Sign Up with your personal details</li>
                  <li>Upload your document details</li>
                  <li>Mint your unique ownership token</li>
                  <li>List your property for sale</li>
                </ul>
                <button className="acc-btn" type="button">Create your account today</button>
              </div>
              <div className="howItWorks-img">
                <img src={images} alt={images} />
              </div>
            </div>
          </div>
          <div className="Questions-container">
            <div className="Q/A">
              <h1>Frequently Asked Questions</h1>
              {/* <Select placeholder="questions asked"
       
        options={options}
      />
       <Select placeholder="questions asked"
       
       options={options}
     /> */}
    
            </div>
          </div>

        </main>
    )
}
export {Home}