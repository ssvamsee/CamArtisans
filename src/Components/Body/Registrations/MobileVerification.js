// function MobileVerification() {
//   return (
//     <>
//       <div
//         style={{
//           background: "grey",
//           width: 1440,
//           height: "100%",
//           margin: "auto",
//         }}
//       >
//         <div
//           className="rectangleLine"
//           style={{
//             position: "absolute",
//             height: 6,
//             width: 523,
//             top: 145,
//             background: "#D2137F",
//           }}
//         >
//           <div
//             style={{
//               height: 6,
//               width: 44,

//               background: "#3E326B",
//             }}
//           />
//         </div>

//         <div
//           style={{
//             position: "relative",
//             height: 1018,
//             width: 470,
//             top: 0,
//             left: 906,
//             background:
//               "linear-gradient(169.16deg, #263768 1.9%, #DD1180 100.54%)",
//           }}
//         />

//         <div>
//           <text
//             style={{
//               position: "absolute",
//               fontSize: 26,
//               fontWeight: "600",
//               top: 219,
//               color: "#333333",
//             }}
//           >
//             welcome To
//           </text>
//           <text
//             style={{
//               position: "absolute",
//               fontSize: 26,
//               fontWeight: "600",
//               top: 270,
//               color: "#666666",
//             }}
//           >
//             CamArtisans
//           </text>
//           <text
//             style={{
//               position: "absolute",
//               fontSize: 32,
//               fontWeight: "600",
//               top: 340,
//               color: "#333333",
//             }}
//           >
//             Hi DEFINITION PICTURES NO COMPRAMISE
//           </text>
//           <p
//             style={{
//               position: "absolute",
//               fontSize: 12,
//               fontWeight: "400",
//               top: 400,
//               color: "#666666",
//             }}
//           >
//             <br />
//             Welcome to the photographer application process. Let’s begin by
//             getting to
//             <br />
//             know each other. Please provide your mobile number below to start.
//           </p>

//           <text
//             style={{
//               position: "absolute",
//               fontSize: 14,
//               fontWeight: "600",
//               top: 540,
//               color: "#666666",
//             }}
//           >
//             Verify your phone number
//           </text>

//           <div
//             style={{
//               flexDirection: "row",
//               display: "flex",
//               background: "red",
//               width: 500,
//               height: 80,
//               alignItems: "center",
//               justifyContent: "space-around",
//             }}
//           >
//             <input
//               style={{
//                 position: "relative",
//                 width: 50,
//                 height: 50,
//                 borderWidth: 1,
//                 borderRadius: 10,
//                 textAlign: "center",
//               }}
//             />
//             <input
//               style={{
//                 position: "relative",
//                 width: 50,
//                 height: 50,
//                 borderWidth: 1,
//                 borderRadius: 10,
//                 textAlign: "center",
//               }}
//             />
//             <input
//               style={{
//                 position: "relative",
//                 width: 50,
//                 height: 50,
//                 borderWidth: 1,
//                 borderRadius: 10,
//                 textAlign: "center",
//               }}
//             />
//             <input
//               style={{
//                 position: "relative",
//                 width: 50,
//                 height: 50,
//                 borderWidth: 1,
//                 borderRadius: 10,
//                 textAlign: "center",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default MobileVerification;


import { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import PhoneInput from 'react-phone-number-input';
import camartisans from "../../../Assets/Images/CamArtisans-1.png";
import 'react-phone-number-input/style.css';
import signupimg from "../../../Assets/Images/signup.png"
import { Link } from "react-router-dom";
import MVimg from "../../../Assets/Images/MV.png"

function Signup(){
    const[value,setValue]=useState();
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
                        <Form.Label className="Formtitlecon"><h2 className="Formtitle">Verify Your Phone Number</h2></Form.Label>
                        {/* <Form.Control type="number" /> */}
                        {/* <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            initialValueFormat="national"
                            value={value}
                            onChange={setValue}
                            className="inputfield"/> */}
                            <div className="Mvinputcon">
                            <input type="number" maxLength="1" className="MVinput"></input>
                            <input type="number" maxlength="1"className="MVinput"></input>
                            <input type="number" maxlength="1" className="MVinput"></input>
                            <input type="number" maxlength="1" className="MVinput"></input>
                            </div>
                        {/* <Form.Text className="text-muted">We'll never share your details with anyone else.</Form.Text> */}
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
export default Signup;