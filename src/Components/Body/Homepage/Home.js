import Button from "react-bootstrap/esm/Button";
import homepageimage from "../../../Assets/Images/homepage-1.png"
import Aboutus from "./Aboutus"
import Ourservices from "./Ourservices";
import icon from '../../../Assets/Images/buttonicon.png'
import Product from "./Product";
import Letsgo from "./Letsgo";

function Home(){
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
        <Button className='HPbutton'>Need a photoshoot right now<img className='buttonicon' src={icon} alt="icon"/></Button>
        </div>
        <Aboutus></Aboutus>
        <Ourservices></Ourservices>
        <Product></Product>
        <Letsgo></Letsgo>
        </>
    );
}

export default Home;