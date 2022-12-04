

import "./Form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function AddProp(){  

    const [stepone, setStepOne] = useState(true);
    const [steptwo, setStepTwo] = useState(false); 

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
                                <p>Support</p>
                               
                            </div>
                         

                        </div>
                        
                        <div className="userForms">
                           {stepone && 
                             <> 
                                <div className="userFormHeader">
                                        <h2>Your Account information</h2>
                                </div>

                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">First name</label>
                                        <input id="empstate" type="text"  placeholder="First Name"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Middle name</label>
                                        <input id="empName" type="text" placeholder="Employer"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Last name</label>
                                        <input id="srange" type="text" placeholder="Last name"/>
                                    </div>
                                </div>
                                {/* <div className="userFormHeader">
                                        <h2>Next-of-kin information</h2>
                                </div> */}

                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">Other names</label>
                                        <input id="empstate" type="text"  placeholder="Other names"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Gender</label>
                                        <input id="empName" type="text" placeholder="Select gender"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Date of birth</label>
                                        <input id="srange" type="text" placeholder="DD-MM-YYYY"/>
                                    </div>
                                 
                                </div>

                                <div className="inputFieldsList">
                                 
                                    <div className="inputField">
                                        <label htmlFor="srange">Address</label>
                                        <input id="srange" type="text" placeholder="Address"/>
                                    </div>
                                    {/* <div className="inputField">
                                        <label htmlFor="srange">Next-of-kin first phone number</label>
                                        <input id="srange" type="text" placeholder="+234"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Next-of-kin first email</label>
                                        <input id="srange" type="text" placeholder="Email Address"/>
                                    </div> */}
                                </div>
                                {/* <div className="userFormHeader">
                                        <h2>Identity Verification</h2>
                                </div> */}

                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">Local government</label>
                                        <input id="empstate" type="text"  placeholder="Local government" />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Street address</label>
                                        <input id="empName" type="text" placeholder="Street address"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Postal code</label>
                                        <input id="empName" type="text" placeholder="Postal code"/>
                                    </div>
                                   
                                </div>
                                
                                <div className="inputFieldsList">
                                  
                                    <div className="inputField">
                                        <label htmlFor="srange">Phone number</label>
                                        <input id="srange" type="text" placeholder="+234"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Email</label>
                                        <input id="srange" type="text" placeholder="Email Address"/>
                                    </div>

                                </div>
                           
                           <div className="userFormButton">
                               
                                 <div className="uformButton">
                                     
                                     <button onClick={handleStep}>Next</button>
                                 </div>
                           </div>
                           
                             </>

                           },
                           {steptwo && <>
                                <div className="userFormHeader">
                                        <h2>Employment information</h2>
                                </div>

                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">Employment status</label>
                                        <input id="empstate" type="text"  placeholder="First Name"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Name of employer</label>
                                        <input id="empName" type="text" placeholder="Employer"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Monthly income range</label>
                                        <input id="srange" type="text" placeholder="income range"/>
                                    </div>
                                </div>
                                <div className="userFormHeader">
                                        <h2>Next-of-kin information</h2>
                                </div>

                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">Next-of-kin first name</label>
                                        <input id="empstate" type="text"  placeholder="First Name"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">Next-of-kin middle name</label>
                                        <input id="empName" type="text" placeholder="Middle Name"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Next-of-kin last name</label>
                                        <input id="srange" type="text" placeholder="Last Name"/>
                                    </div>
                                 
                                </div>

                                <div className="inputFieldsList">
                                 
                                    <div className="inputField">
                                        <label htmlFor="srange">Relationship with Next-of-kin</label>
                                        <input id="srange" type="text" placeholder="Relationship"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Next-of-kin first phone number</label>
                                        <input id="srange" type="text" placeholder="+234"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Next-of-kin first email</label>
                                        <input id="srange" type="text" placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="userFormHeader">
                                        <h2>Identity Verification</h2>
                                </div>

                                <div className="inputFieldsList">
                                    <div className="inputField">
                                        <label htmlFor="empstate">Type of ID</label>
                                        <input id="empstate" type="text"  placeholder="First Name"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="empName">ID number</label>
                                        <input id="empName" type="text" placeholder="Middle Name"/>
                                    </div>
                                   
                                </div>
                                
                                <div className="inputFieldsList">
                                  
                                    <div className="inputField">
                                        <label htmlFor="srange">Upload ID front</label>
                                        <input id="srange" type="text" placeholder="Upload front of ID"/>
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="srange">Upload ID back</label>
                                        <input id="srange" type="text" placeholder="Upload back of ID"/>
                                    </div>
                                </div>
                           
                           <div className="userFormButton">
                               
                                 <div className="uformButton">
                                     
                                     <button className="goback" onClick={handleStep}>Go back</button>
                                     <button>Submit</button>
                                 </div>
                           </div>
                           
                           </>

                           }
                                
                           
                           
                        </div>
                    
          </div>
        </>
    )

}

export default AddProp;