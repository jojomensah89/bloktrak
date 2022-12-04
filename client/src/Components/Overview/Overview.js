
import "./Overview.css"

function Overview(){   
    const Cards = [ 
        { 
            "Title" : "Pending Verifies", 
            "Count" : 3,
        },
        { 
            "Title" : "Sold Property", 
            "Count" : 7,
        },
        { 
            "Title" : "Ownership transfers", 
            "Count" : 1,
        },
        { 
            "Title" : "Pending Users", 
            "Count" : 0,
        },
    ]

    const announce =  [
        {  
            "Date" : "11/20/2022",
            "anna" : "Something important here"
        },
        {  
            "Date" : "11/20/2022",
            "anna" : "Something important too"
        },
        {  
            "Date" : "11/20/2022",
            "anna" : "Something important yes"
        },
        {  
            "Date" : "11/20/2022",
            "anna" : "Something important here"
        },


]

    return( 

        <>
             <div className="overviewCover">  
                 
                 <div className="mainOverview">
                    
                       <h1>Admin Overview</h1>

                
                 </div>

                 <div className="Analytics">  
                    <div  className="minHeading"></div>
                    <div className="Content"> 
                                <div className="cards">
                                    <div className="card"> 
                                     {Cards.map((item,key)=>{ 
                                          return( 
                                            <div className="inCard"> 

                                             <div className="cardIcon"><h1>BK</h1></div>
                                                 <div className="cardDetail">
                                                   <p>{item.Title}</p> 
                                                   <p>{item.Count}</p> 

                                             </div>

                                            </div>
                                          )

                                     })}
                                        
                                    </div>
                                </div>
                                <div className="Announcements"> 

                                            <div className="annoucement">
                                                <div className="annHead">
                                                    <div>
                                                        <h3>Announcements</h3>
                                                        {/* <p>Aug 19 2022</p> */}
                                                    </div> 
                                                    {announce.map((item,key)=>{
                                                        return(
                                                            <div className="annCard">
                                                                <div className="cardData"> <p>{item.Date}</p></div>
                                                               
                                                                <p>{item.anna}</p>
                                                            </div>
                                                        )
                                                    })}
                                                    
                                                </div>

                                            </div>

                                </div>
                    </div>

                 </div>


            </div>
                
        </>
    )

}

export default Overview;