

import "./AddProp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function AddProp(){  

    const [stepone, setStepOne] = useState(true);
    const [steptwo, setStepTwo] = useState(false); 
    const [splan,setPlan] = useState("");
    const [deed,setdeed] = useState("");
    const [scontract,setContract] = useState("");

    async function addProperty(e) {  
        e.preventDefault(); 

         const response = await fetch("http://localhost:2000/api/addprop",{ 
                method : "POST",
                headers: { 
                 "content-type" :   "application/json"
                }, 
                body: JSON.stringify({
                    splan,
                    deed,
                    scontract
                })
                

         }) 

        
    }



    const handleStep = () =>{
         console.log("Hi")
         setStepOne(!stepone);
         setStepTwo(!steptwo);
    } 

   

    return( 

        <>  
          <div className="formCover">
                <div className="propFilters">
                            <div className="filterHeading">
                                <h2>Settings</h2>
                                {/* <button>Reset</button> */}
                            </div>
                            <div className="filterItem">
                                <p>Account information</p>
                            </div>
                            <div className="filterItem">
                                <p>Register property</p>
                            </div>

                            <div className="filterItem">
                                <p>Manage property</p>
                               
                            </div>
                            <div className="filterItem">
                                <p>Favourites</p>
                                
                            </div>
                            <div className="filterItem">
                                <p>Offers made</p>
                               
                            </div>
                            <div className="filterItem">
                                <p>Offers received</p>
                               
                            </div>
                            <div className="filterItem">
                                <p>Transaction history</p>
                                
                            </div>
                            <div className="filterItem">
                                <p>Supports</p>
                               
                            </div>
                         

                        </div>
                        
                        <div className="userForms">
                           {stepone && 
                             <> 
                                <div className="userFormHeader">
                                        <h2>Add Property</h2>
                                </div>

                           
                            {/* const [splan,setPlan] = useState("");
    const [deed,setdeed] = useState("");
    const [scontract,setContract] = useState(""); */}

                                {/* <div className="userFormHeader">
                                        <h2>Next-of-kin information</h2>
                                </div> */}
       
                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">Deed of assignment</label>
                                        <input id="empstate" type="text"  placeholder="Other names"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">*Cert of occupancy</label>
                                        <input id="empName" type="text" placeholder="Select gender"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">*Contract of sale</label>
                                        <input id="srange" type="text" placeholder="DD-MM-YYYY"/>
                                    </div>
                                 
                                </div>
                           


                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">*survey plan</label>
                                        <input id="empstate" type="text"  placeholder="Local government" 
                                         onChange={(e) => setContract(e.target.value)}
                                         value={scontract}
                                        
                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Street address</label>
                                        <input id="empName" type="text"  placeholder="Street address"
                                         onChange={(e) => setPlan(e.target.value)}
                                         value={splan}

                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Postal code</label>
                                        <input id="empName" type="text" placeholder="Postal code"
                                         onChange={(e) => setdeed(e.target.value)}
                                         value={deed}

                                        />
                                    </div>
                                   
                                </div>
                                
                        
                           
                           <div className="userFormButton">
                               
                                 <div className="uformButton">
                                     
                                     <button onClick={addProperty}>Add Property</button>
                                 </div>
                           </div>
                           
                             </>

                           },
                          
                           
                        </div>
                    
          </div>
        </>
    )

}

export default AddProp;