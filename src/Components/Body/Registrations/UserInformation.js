import React, { Component } from "react";
import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import camartisans from "../../../Assets/Images/CamArtisans-1.png";
import "react-phone-number-input/style.css";
import R2 from "../../../Assets/Images/R2.png";
import { Link } from "react-router-dom";
import MVimg from "../../../Assets/Images/MV.png";
import OtpInput from "react-otp-input";

export default class UserInformation extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });
  render() {
    return (
      <>
        <div className="Signup">
          <div className="hrline"></div>
          <div className="SUh2">
            <h2>welcome to</h2>
          </div>
          <div className="SUimgcon">
            <img className="SUimg" src={camartisans} alt="camartisans" />
          </div>
          <div className="SUtextcon">
            <p className="SUtext">HIGH DEFINITION PICTURES NO COMPROMISE </p>
          </div>
          <div className="SUsubtextcon">
            <span className="Susubtext">
              Welcome to the photographer application process. Let’s begin by
              getting to know each other. Please provide your mobile number
              below to start.
            </span>
          </div>
          <div className="Mobilecon">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">Email Address</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" type="email" />
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">First Name</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" />
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">Last Name</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" />
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">Create Password</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" type="password" />
                <Form.Label className="Formtitlecon">
                  <h2 className="Formtitle">Confirm Password</h2>
                </Form.Label>
                <Form.Control className="UIInputFeild" type="password" />
              </Form.Group>
            </Form>
          </div>
          <div className="UIbuttoncon">
            <Nav.Link className="SUbut" as={Link} to="/Agree&Confirming">
              <Button className="UIbutton">Next</Button>
            </Nav.Link>
          </div>
          <div className="UIlg"></div>
          <div className="MVimgcon1">
            <img className="UIGirlPic" src={R2} alt="Signup Image" />
          </div>
        </div>
      </>
    );
  }
}
