import { Button, Form, Nav } from "react-bootstrap";
import 'react-phone-number-input/style.css';
import signupimg from "../../../Assets/Images/signup.png"
import { Link } from "react-router-dom";

function ForgotPassword(){
    return(
        <>
            <div className="Signup">
                <div className="hrline"></div>
                <div className="FPh2"><h2>Forgot Password</h2></div>
                {/* <div className="SUimgcon"><img className="SUimg" src={camartisans} alt="camartisans"/></div> */}
                {/* <div className="SUtextcon"><p className="SUtext">HIGH DEFINITION PICTURES NO COMPROMISE </p></div> */}
                <div className="SUsubtextcon1"><span className="Susubtext">Welcome to the photographer application process. Let’s begin by getting to know each other. Please provide your mobile number below to start.</span></div>
                <div className="Mobilecon">
                 <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="Formtitlecon">
                         <h2 className="Formtitle">Enter Your Registered Email Id</h2>
                        </Form.Label>
                        <Form.Control className="UIInputFeild" type="email" />
                        
                    </Form.Group>
                </Form>
                    {/* <div className="AHAAcon"><h2 className="Formtitle">Already Have an account?</h2><span className="SUsignin"> Sign In</span></div> */}
                </div>
                <div className="SUbuttoncon"><Nav.Link className="SUbut" as={Link} to="/ResetPassword"><Button className="SUbutton">FORGOT PASSWORD</Button></Nav.Link></div>
                <div className="Loginsignupcon">
                    <h2 className="Formtitle">Don't Have an account?<Nav.Link className="SUbut" as={Link} to="/Signup"> <span className="SUsignin"> Sign Up</span></Nav.Link> </h2>
                    
                </div>
                <div className="FPRightlg"></div>
                <div className="SUimgcon1"><img className="SUimg1" src={signupimg} alt="SignupImage"/></div>
            </div>
        </>
    );
}
export default ForgotPassword;