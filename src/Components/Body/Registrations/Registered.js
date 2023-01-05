import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import PhoneInput from 'react-phone-number-input';
import Registeredlogo from "../../../Assets/Images/Registeredlogo.png";
import 'react-phone-number-input/style.css';
import register from "../../../Assets/Images/register.png"
import { Link } from "react-router-dom";

function Registered(){
    const[value,setValue]=useState();
    return(
        <>
            <div className="Signup">
                <div className="hrline"></div>
                <div className="SUh2"><h2>Thank you Vamsee!</h2></div>
                {/* <div className="SUimgcon"><img className="SUimg" src={camartisans} alt="camartisans"/></div> */}
                <div className="SUtextcon"><p className="SUtext">Great! You Have Registered Successfully </p></div>
                <div className="REiconcon"><img className="REicon" src={Registeredlogo} alt="Registeredlogo"/></div>

                {/* <div className="SUsubtextcon"><span className="Susubtext">Welcome to the photographer application process. Let’s begin by getting to know each other. Please provide your mobile number below to start.</span></div> */}
                <div className="Mobilecon">
                    {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="Formtitlecon"><h2 className="Formtitle">Enter Your Mobile Number</h2></Form.Label>
                        <Form.Control type="number" />
                        <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            initialValueFormat="national"
                            value={value}
                            onChange={setValue}
                            className="inputfield"/>
                        <Form.Text className="text-muted">We'll never share your details with anyone else.</Form.Text>
                        </Form.Group>
                    </Form> */}
                    {/* <div className="AHAAcon"><h2 className="Formtitle">Already Have an account?</h2><span className="SUsignin"> Sign In</span></div> */}
                </div>
                <div className="SUbuttoncon"><Nav.Link className="SUbut" as={Link} to="/Login"><Button className="SUbutton">BOOK A SHOOT</Button></Nav.Link></div>
                <div className="Rightlg"></div>
                <div className="REimgcon1"><img className="SUimg1" src={register} alt="Signup Image"/></div>
            </div>
        </>
    );
}
export default Registered;