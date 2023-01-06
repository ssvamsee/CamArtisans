import { Button, Form, Nav } from "react-bootstrap";
import camartisans from "../../../Assets/Images/CamArtisans-1.png";
import 'react-phone-number-input/style.css';
import Loginimg from "../../../Assets/Images/login.png"
import { Link } from "react-router-dom";

function Login(){
    return(
        <>
            <div className="Signup">
                <div className="hrline"></div>
                <div className="SUh2"><h2>welcome to</h2></div>
                <div className="SUimgcon"><img className="SUimg" src={camartisans} alt="camartisans"/></div>
                <div className="SUtextcon"><p className="SUtext">HIGH DEFINITION PICTURES NO COMPROMISE </p></div>
                <div className="SUsubtextcon"><span className="Susubtext">Welcome to the photographer application process. Let’s begin by getting to know each other. Please provide your mobile number below to start.</span></div>
                <div className="Mobilecon">
                <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">Email Address</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" type="email" />
                
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">Password</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" type="password" />
               
              </Form.Group>
            </Form>
                    <div className="LoginFPcon"><Nav.Link className="SUbut" as={Link} to="/ForgotPassword"><h2 className="FPtitle SUsignin">Forgot Password?</h2></Nav.Link></div>
                </div>
                <div className="SUbuttoncon"><Nav.Link className="SUbut" as={Link} to="/home"><Button className="SUbutton">SIGN IN</Button></Nav.Link></div>
                <div className="Loginsignupcon">
                    <h2 className="Formtitle">Don’t Have an account?<Nav.Link className="SUbut" as={Link} to="/Signup"> <span className="SUsignin"> Sign Up</span></Nav.Link> </h2>
                    
                </div>
                <div className="Loginlg"></div>
                <div className="Loginimgcon1"><img className="SUimg1" src={Loginimg} alt="LoginImage"/></div>
            </div>
        </>
    );
}
export default Login;