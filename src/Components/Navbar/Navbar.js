import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Body/Homepage/Home';
import Button from 'react-bootstrap/Button';
import Logo from './Logo';
import icon from '../../Assets/Images/buttonicon.png'
import Signup from '../Body/Registrations/Signup';
import MobileVerification from '../Body/Registrations/MobileVerification';
import Registered from '../Body/Registrations/Registered';
import AgreeConfirming from '../Body/Registrations/Agree-Confirming';
import ForgotPassword from '../Body/Registrations/ForgotPassword';
import Login from '../Body/Registrations/Login';
import ResetPassword from '../Body/Registrations/ResetPassword';
import UserInformation from '../Body/Registrations/UserInformation';
// import Ourservices from '../Body/Homepage/Ourservices';
import Categories from '../Body/Categories/Categories';
import BSCategory from '../Body/Categories/Business/Business-Category';
import PSCategory from '../Body/Categories/Personal/Personal-Category';
import NFPCategory from '../Body/Categories/Not_for_Profit/NFP-Category';

function NavBar() {
  // const handleClickScroll = () => {
  //   const element = document.getElementById('services');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
    <Navbar collapseOnSelect expand="md" variant="dark" className='Navbar_main'>
      <Container className='Navbarcon'>
        <Navbar.Brand href="#"> <Logo></Logo> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-2 my-xxl-0 gap-4 me-5">
          <Nav.Link className='navbar_link' as={Link} to="/HomePage" eventKey="1">Home</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/About" eventKey="1">About</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Services" eventKey="1">Services</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Contact" eventKey="1">Contact</Nav.Link>       
          </Nav>
          <Nav.Link className="navbut" as={Link} to="/Login">  <Button className='loginbutton'>Login<img className='buttonicon' src={icon} alt="icon"/></Button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<Home></Home>}></Route>
            <Route path='/HomePage' element = {<Home></Home>}></Route>
            <Route path='/CamArtisans/' element = {<Home></Home>}></Route>
            <Route path='/Signup' element={<Signup></Signup>}/>
            <Route path='/MobileVerification' element={<MobileVerification></MobileVerification>}/>
            <Route path='/Registered' element={<Registered/>}/>
            <Route path='/Agree&Confirming' element={<AgreeConfirming/>}/>
            <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/ResetPassword' element={<ResetPassword/>}/>
            <Route path='/UserInformation' element={<UserInformation/>}/>
            <Route path='/Services' element={<Categories/>}/>
            <Route path='/Business-Category' element={<BSCategory/>}/>
            <Route path='/Personal-Category' element={<PSCategory/>}/>
            <Route path='/NFP-Category' element={<NFPCategory/>}/>

        </Routes>
    </div>
    </>
  );
}

export default NavBar;