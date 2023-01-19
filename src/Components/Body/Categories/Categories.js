import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loginimg from "../../../Assets/Images/login.png"

function Categories(){
    return(
        <>
            <div className="Categories">
                <div>
                    <div className="hrline"></div>
                    <div className="SUtextcon"><p className="SUtext">Select Your SHOOT category </p></div>
                    <div className="SUsubtextcon"><span className="Susubtext">Welcome to the photographer application process. Let’s begin by getting to know each other. Please provide your mobile number below to start.</span></div>
                    <div className="d-flex">
                        <Button className="Categorybtn1" as={Link} to="/Business-Category">For Business</Button>
                        <Button className="Categorybtn2" as={Link} to="/Personal-Category">Personal</Button>
                        <Button className="Categorybtn3" as={Link} to="/NFP-Category">Not For Profit</Button>
                       
                    </div>
                    <div className="categorylg"></div>
                    <div className="Loginimgcon1"><img className="SUimg1" src={Loginimg} alt="LoginImage"/></div>
                </div>
            </div>  
        </>
    );
}

export default Categories;