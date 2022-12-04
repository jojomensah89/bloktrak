// import img1 from "../HeroList/images/img1.png"
import img1 from "../Images/img2.jpg"
import "./HeroList.css"
import { useContext, useEffect } from "react";
import { LandContext } from "../../Context/TransactionContext";

function HeroList(){   

    // const {connectWallet} = useContext(LandContext);
    
    // useEffect(()=>{
    //     console.log(value,"value")
    // },[])

    return( 

        <>  
          <div className="HeroListCover"> 
                <div className="HListDetails">
                    <div className="Wording">
                            <h1>Some high-end <br/> Property</h1>
                            <p>High end Property in Accra, Ondo State, <br/> Nigeria</p>
                            <ul>
                                <li>5343 sq meters</li>
                                <li>Forestry</li>
                            </ul>
                    </div>
                    <div className="ButtonWording">
                        <h2>7000 MATIC</h2>
                        <button>View Property</button>
                    </div>

                </div>
                <div className="HListImage">
                    <img src={img1}/>
                </div>
                   
          </div>
        </>
    )

}

export default HeroList;