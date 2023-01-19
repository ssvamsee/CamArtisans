import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loginimg from "../../../../Assets/Images/login.png"
function BSCategory(){
    return(
        <>
        <div className="Categories">
                <div>
                    <div className="hrline"></div>
                    <div className="SUtextcon"><p className="SUtext">Select Your SHOOT category </p></div>
                    <div className="SUsubtextcon"><span className="Susubtext">Welcome to the photographer application process. Let’s begin by getting to know each other. Please provide your mobile number below to start.</span></div>
                    <div className="d-flex">
                        <Button className="Categorybtn1 Catbtn activecategory" as={Link} to="/Business-Category">For Business</Button>
                        <Button className="Categorybtn2 Categbtn2" as={Link} to="/Personal-Category" disabled>Personal</Button>
                        <Button className="Categorybtn3 Categbtn3" as={Link} to="/NFP-Category" disabled>Not For Profit</Button>
                        <Button className="Categorybtn4 Catbtn proceedbtn" as={Link} to="/Business-Category" disabled>Proceed</Button>
                    </div>
                    <div className="categorylg"></div>
                    <div className="Loginimgcon1"><img className="SUimg1" src={Loginimg} alt="LoginImage"/></div>
                </div>
            </div>  
        </>
    );
}
export default BSCategory;