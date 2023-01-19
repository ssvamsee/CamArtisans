import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import icon from "../../Assets/Images/buttonicon.png";
import camartisans from "../../Assets/Images/CamArtisans.png";
import fimg from "../../Assets/Images/Fimg.png"

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted Footer'>
      
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-5'>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Product</h6>
              <p>
                <a href='/Home' className='text-reset'>
                  Book Shoot
                </a>
              </p>
              <p>
                <a href='/Home' className='footertextJON'>
                  Join Our Network
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Cost Calculator
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Print
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Shift Planner
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Recruiting
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
              <p>
                <a href='/Home' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Support
                </a>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='/Home' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Core Team
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='/Home' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 mt-5 Footersubscribe'>
            <form action='' className='Footerform'>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="100%">
                <p className='pt-2 mt-3'>
                  <strong className='Footertext'>Subscribe</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <input contrast type='email' placeholder='Email Address' label='Email address' className='mb-4 footerinput'/><div className='footerbuttoniconcon'><img className='footerbuttonicon' src={icon} alt="icon"/></div> 
              </MDBCol>

              <MDBCol size="auto">
                {/* <MDBBtn outline color='light' type='submit' className='mb-4'> */}
                <p className='Footertextp'>Hello, we are CamArtisans. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                
              </MDBCol>
            </MDBRow>
          </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between border-top'>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}
        <MDBRow className='mt-3'>
         <MDBCol md='3' lg='4' xl='3' className='mx-auto mt-5 ms-4'>
              {/* <h2 className='text-uppercase fw-bold mb-4'>
                
              </h2> */}
              <div className='Footerimgcon'>
              <img className="Footerimg" src={camartisans} alt="camartisans"/>
              </div>
            </MDBCol>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mt-5 ms-5'>
              {/* <h2 className='text-uppercase fw-bold mb-4'>
                
              </h2> */}
              <div className='Fimgcon'>
              <img className="Fimg" src={fimg} alt="camartisans"/>
              </div>
            </MDBCol>
            <MDBCol>
                  <div className='footericons'>
                      <a href='www.google.com' className='btn btn-outline-light btn-floating me-4' role="button">
                          <i class="fab fa-instagram"></i>
                      </a>
                      <a href='www.google.com' className='btn btn-outline-light btn-floating me-4' role="button">
                          <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href='www.google.com' className='btn btn-outline-light btn-floating me-4' role="button">
                      {/* <MDBIcon color='secondary' icon='facebook-f' /> */}
                          <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href='www.google.com' className='btn btn-outline-light btn-floating me-4' role="button">
                          <i class="fab fa-twitter"></i>
                      </a>       
                  </div>
            </MDBCol>
        <div className='tpc'>
        <div className='text-center p-4 tpctext'>
              Terms
        </div>
        <div className='text-center p-4 tpctext'>
              Privacy
        </div>
        <div className='text-center p-4 tpctext'>
              Cookies
        </div>
        </div>
        <div className='text-center p-4 copyright'>Copyright © {new Date().getFullYear()}. Trevista Innovations. All Rights Reserved</div>
      </MDBRow>
      </section>

    </MDBFooter>
  );
}