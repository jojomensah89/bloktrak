
import HeroList from "../../Components/HeroList/HeroList";
import NavBar from "../../Components/NavBar/NavBar"; 
import PropList from "../../Components/PropList/PropList";
import Footer from "../../Components/Footer/Footer";
function Marketplace(){  

    return( 

        <>  
          <div>
                    <NavBar/>
                    <HeroList/>
                    <PropList/>
                    <Footer/>
                    
          </div>
        </>
    )

}

export default Marketplace;