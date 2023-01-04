import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import PhoneInput from 'react-phone-number-input';
import camartisans from "../../../Assets/Images/CamArtisans-1.png";
import 'react-phone-number-input/style.css';
import ACimg from "../../../Assets/Images/AC.png"
import { Link } from "react-router-dom";
import { MDBCheckbox } from 'mdb-react-ui-kit';

function AgreeConfirming(){
    const[value,setValue]=useState();
    return(
        <>
            <div className="Signup">
                <div className="hrline"></div>
                <div className="ACh2"><h2>Almost There!</h2></div>
                <div className="SUimgcon"><img className="SUimg" src={camartisans} alt="camartisans"/></div>
                <div className="ACtextcon"><p className="SUtext">Spend Lesstime scheduling,</p><p className="SUtext">More time taking beautiful  memories  </p></div>
                {/* <div className="SUsubtextcon"><span className="Susubtext">Welcome to the photographer application process. Let’s begin by getting to know each other. Please provide your mobile number below to start.</span></div> */}
                <div className="Mobilecon">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label className="Formtitlecon"><h2 className="Formtitle">Enter Your Mobile Number</h2></Form.Label> */}
                        {/* <Form.Control type="number" /> */}
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' className="Agreebox" /><div className="Agreetextcon"><h5 className="Agreetext">I Agree</h5></div>
                        <Form.Text className="text-muted">By creating an account, You agree to <span>CamArtisans</span> terms and conditions</Form.Text>
                        </Form.Group>
                    </Form>
                    {/* <div className="AHAAcon"><h2 className="Formtitle">Already Have an account?</h2><span className="SUsignin"> Sign In</span></div> */}
                </div>
                <div className="SUbuttoncon"><Nav.Link className="SUbut" as={Link} to="/Registered"><Button className="SUbutton">CONFIRM</Button></Nav.Link></div>
                <div className="Rightlg"></div>
                <div className="acimgcon1"><img className="SUimg1" src={ACimg} alt="Signup Image"/></div>
            </div>
        </>
    );
}
export default AgreeConfirming;