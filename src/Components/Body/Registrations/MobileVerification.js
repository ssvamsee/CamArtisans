import React, { Component } from "react";
import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import PhoneInput from 'react-phone-number-input';
import camartisans from "../../../Assets/Images/CamArtisans-1.png";
import 'react-phone-number-input/style.css';
import signupimg from "../../../Assets/Images/signup.png"
import { Link } from "react-router-dom";
import MVimg from "../../../Assets/Images/MV.png"
import OtpInput from 'react-otp-input';

export default class MobileVerification extends Component{
    state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });
  render(){    
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
                        <Form.Label className="Formtitlecon"><h2 className="Formtitle">Verify Your Phone Number </h2></Form.Label>
                            <div className="Mvinputcon">
                            {/* <input type="number" maxLength="1" className="MVinput"></input>
                            <input type="number" maxlength="1"className="MVinput"></input>
                            <input type="number" maxlength="1" className="MVinput"></input>
                            <input type="number" maxlength="1" className="MVinput"></input> */}
                              <OtpInput
                                value={this.state.otp}
                                onChange={this.handleChange}
                                numInputs={4}
                                separator={<span className="OTPSeparator">{"--"}</span>}
                                />
                            </div>
                        </Form.Group>
                    </Form>
                    <div className="MVtextcon"><h2 className="Formtitle">Didn't Receive the Code?</h2><span className="SUsignin"> Request Again</span></div>
                </div>
                <div className="SUbuttoncon"><Nav.Link className="SUbut" as={Link} to="/MobileVerification"><Button className="SUbutton">Verify and create account</Button></Nav.Link></div>
                <div className="Rightlg"></div>
                <div className="MVimgcon1"><img className="MVimg1" src={MVimg} alt="Signup Image"/></div>
            </div>
        </>
    );
  }
}
