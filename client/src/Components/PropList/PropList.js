
// import img1 from "../Images/img1.png"
import img1 from "../Images/img2.jpg"
import "./PropList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function PropList(){  

    const shootss = [
        {
            "ImgUrl": img1, 
            "Name": "Arts",
            "Title" : "Our property is located in pretoria, a beautiful coastal city in southafrica"
        },
        {
            "ImgUrl": img1, 
            "Name": "Academics",
            "Title" : "Our property is located in pretoria, a beautiful coastal city in southafrica"
        },
        {
            "ImgUrl": img1, 
            "Name": "Adventure",
            "Title" : "Our property is located in pretoria, a beautiful coastal city in southafrica"
        },
        {
            "ImgUrl": img1, 
            "Name": "Adventure",
            "Title" : "Our property is located in pretoria, a beautiful coastal city in southafrica"
        },
        {
            "ImgUrl": img1, 
            "Name": "Adventure",
            "Title" : "Our property is located in pretoria, a beautiful coastal city in southafrica"
        },
        {
            "ImgUrl": img1, 
            "Name": "Adventure",
            "Title" : "Our property is located in pretoria, a beautiful coastal city in southafrica"
        },
    ]

    return( 

        <>  
          <div className="PropListCover">  
                <div className="propFilter">
                    <div className="filterHeading">
                        <h2>Filter</h2>
                        <button>Reset</button>
                    </div>
                    <div className="filterItem">
                        <p>Continent</p>
                    </div>
                    <div className="filterItem">
                        <p>country</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterItem">
                        <p>Region</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterItem">
                        <p>State</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterItem">
                        <p>Property type</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterItem">
                        <p>Property Size</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterItem">
                        <p>Continent</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterItem">
                        <p>On sale</p>
                        <p><FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/></p>
                    </div>
                    <div className="filterFooter">
                        <h3>Price(Polygon-Matic)</h3>
                    </div>

                </div>

                <div className="ListCardsCover"> 
                        <div className="listInputFields">

                            <div className="propSearch">
                                     <input type="text" placeholder="Search"/>
                                     <FontAwesomeIcon icon={faMagnifyingGlass} className="FontAwesomeIcon"/>
                            </div>

                            <div className="propSort">
                                    <input type="text" placeholder="Sort"/>
                                    <FontAwesomeIcon icon={faChevronDown} className="FontAwesomeIcon"/>
                            </div>
                                
                                
                        </div>
                        <div className="ListCards">
                            <div className="NewsCardContainer"> 

                                    {
                                    shootss.map((item,index)=>{

                                        return(
                                                <div className="CardHolderNew" key={index}> 
                                            
                                                            <div className="ImageHolderThird">
                                                            <img src={item.ImgUrl}/> 
                                                        
                                                            </div>

                                                            <div className="Blocation"> 
                                                            
                                                                <p><b>Lusaka</b></p>
                                                            </div>  
                                                            <div className="BPrice"> 
                                                                <h3>200 MATIC</h3>
                                                            
                                                            </div>  
                                                        

                                                            <div className="ImageText"> 
                                                            
                                                            {/* <h3>{item.Name} </h3>  */}
                                                            <p> {item.Title}</p>

                                                            </div>  
                                                            <div className="moreButtons"> 
                                                                     <button>View Property</button>
                                                            
                                                            </div>  


                                                        
                                            
                                            
                                            </div>

                                        )
                                    })
                                }


            </div>

                        </div>

                </div>
                    
          </div>
        </>
    )

}

export default PropList;