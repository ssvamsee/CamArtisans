import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import camartisans from "../../../Assets/Images/CamArtisans-1.png";
import "react-phone-number-input/style.css";
import signupimg from "../../../Assets/Images/signup.png";
import { Link } from "react-router-dom";

function UserInformation() {
  const [value, setValue] = useState();
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
            getting to know each other. Please provide your mobile number below
            to start.
          </span>
        </div>
        <div className="Mobilecon">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="UIInputFeild">
                <h3>Email Address</h3>
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
        <div className="SUbuttoncon">
          <Nav.Link className="SUbut" as={Link} to="/Agree&Confirming">
            <Button className="SUbutton">SEND OTP</Button>
          </Nav.Link>
        </div>
        <div className="Rightlg"></div>
        <div className="SUimgcon1">
          <img className="SUimg1" src={signupimg} alt="Signup Image" />
        </div>
      </div>
    </>
  );
}
export default UserInformation;
