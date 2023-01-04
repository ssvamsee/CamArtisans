import Button from "react-bootstrap/esm/Button";
import homepageimage from "../../../Assets/Images/homepage-1.png"
import Aboutus from "./Aboutus"
import Ourservices from "./Ourservices";
import icon from '../../../Assets/Images/buttonicon.png'
import Product from "./Product";
import Letsgo from "./Letsgo";
import { Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

// import Signup from "../Registrations/Signup.js";

function Home(props){
    return(
        <>
        <div className="homepageimagecontainer">
            <img className="homepageimage" src={homepageimage} alt='homepageimage'/>
        </div>
        <div className="HPtextcontainer">
        <div className="HPtextcon1-h2">
            <h2>Where does it come from?</h2>
        </div>
        <div className="HPtextcon2-p">
            <p>Book a single on-demand photoshoot in as little as 60 seconds, for any business or personal need. No minimums, pay as you go.</p>
        </div>
        <Nav.Link className='HPbutton' as={Link} to="/Signup"><Button className='button1'> Need a photoshoot right now<img className='buttonicon' src={icon} alt="icon"/></Button></Nav.Link>
        </div>
        <Aboutus></Aboutus>
        <Ourservices></Ourservices>
        <Product></Product>
        <Letsgo></Letsgo>
        {/* <Routes>
            <Route path='/Signup' component={Signup}/>
        </Routes> */}
        </>
    );
}

export default Home;