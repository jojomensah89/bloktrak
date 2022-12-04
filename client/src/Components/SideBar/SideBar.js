
import "./SideBar.css"
import Settings from "../Settings/Settings";
import { Outlet, Route,Routes } from "react-router";
import { Link ,useNavigate} from "react-router-dom";
// import Reports from "../Reports/Reports";
// import Charts from "../Charts/Charts"; 
import Overview from "../Overview/Overview";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome,faClipboard,faChartLine,faTools } from '@fortawesome/free-solid-svg-icons'
// import {faAirbnb} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react"; 
// import jwt from "jsonwebtoken"

function SideBar(){   

    let navigate  = useNavigate();
    const [quote,setQuote] = useState("");
    const [tester,setTester] = useState("tester");
    const [tempQuote, setTempQuote] = useState('');
    const [tempEmail,setTempEmail] = useState('test6@test.com');

    async function populateData(){  

          const response = await fetch("http://localhost:2000/api/dashboard",{
              headers : { 
                'x-access-token' : tempEmail,
                }
            // body: JSON.stringify({
            //     quote,
                
            // })
          })
          
          const data = await response.json();
    
          if(data){

         if(data.status == "ok") {
             console.log("testign first");
             setTester("correct")
          }else{
             alert(data.error,"Here!")
             console.log("testign first")
          } 

       }
          
          console.log(data,"aync test");
          
          return data;
          
    }

    useEffect(()=>{ 



              populateData().then((data)=>{
                  console.log(data, "testing again")
              }) 
       

        // const token = localStorage.getItem('token');
        // if(token){ 
        //     const user = jwt.decode(token);
        //     if(!user){ 
        //         localStorage.removeItem('token'); 
        //         navigate("/login"); 
        //         console.log("in effect else")
        //     }else{ 
                
                // console.log("in effect")
            // }
       // } 

    //    console.log(data,"testing here")
    //    if(data){

    //      if(data.status == "ok") {
    //          console.log("testign first");
    //          setTester("correct")
    //       }else{
    //          alert(data.error,"Here!")
    //          console.log("testign first")
    //       } 

    //    }

    },[])

    async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:2000/api/dashboard', {
			method: 'POST',
            headers: { 
                "content-type" :   "application/json"
               }, 
			// headers: {
			// 	'Content-Type': 'application/json',
			// 	'x-access-token': localStorage.getItem('token'),
			// },
			body: JSON.stringify({
				quote: tempQuote,
                // token : localStorage.getItem('token'),
                email :"test6@test.com"
                
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('');
            populateData()
		} else {
			alert(data.error,"Here")
		}
	}

    return( 

        <>   
            <div className="sideBarWhole">
     
                    <div className="SideBarCover">  

                            <div className="Logo"><h1>Admin dashboard</h1></div>
                            <div className="SideList">
                                <ul>
                                   
                                    <li ><Link className='text-link' to="Overview">Sales approvals</Link></li>
                                    {/* <li ><Link className='text-link' to="Overview"><FontAwesomeIcon icon="fa-solid fa-house" />Overview</Link></li> */}
                                    <li><Link className='text-link' to="Reports">KYC Approvals</Link></li>
                                    <li><Link className='text-link' to="Charts">Minting approvals</Link></li>
                                    {/* <li><Link className='text-link'to="settings">Setup</Link></li> */}
                                   
                                </ul>
                            </div>
        


                    </div>

                    <div className="Outlets">
                        <div className="outNav">
                            {/* <ul>
                                <li><h1>I</h1></li>
                                <li><h1>Data :{ quote || "no quote found"}</h1></li>
                                <li><h1>Data2 :{ tester}</h1></li>
                            </ul> */}

                        </div>
                                <Outlet/>
                   </div>

                   {/* <h1>Your quote1: {quote || 'No quote found'}</h1>
                    <form onSubmit={updateQuote}>
                        <input
                            type="text"
                            placeholder="Quote"
                            value={tempQuote}
                            onChange={(e) => setTempQuote(e.target.value)}
                        />
                        <input type="submit" value="Update quote" />
                    </form> */}
                    </div>
                
        </>
    )

}

export default SideBar;