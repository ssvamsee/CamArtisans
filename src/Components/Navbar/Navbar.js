import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Body/Homepage/Home';
import Button from 'react-bootstrap/Button';
import Logo from './Logo';
import icon from '../../Assets/Images/buttonicon.png'

function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark" className='Navbar_main'>
      <Container>
        <Navbar.Brand href="#"> <Logo></Logo> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-2 my-xxl-0 gap-4 me-5">
          <Nav.Link className='navbar_link' as={Link} to="/HomePage" eventKey="1">Home</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/About" eventKey="1">About</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Services" eventKey="1">Services</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Contact" eventKey="1">Contact</Nav.Link>       
          </Nav>
          <Button className='loginbutton'>Login<img className='buttonicon' src={icon} alt="icon"/></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<Home></Home>}></Route>
            <Route path='/HomePage' element = {<Home></Home>}></Route>
            <Route path='/CamArtisans' element = {<Home></Home>}></Route>

        </Routes>
    </div>
    </>
  );
}

export default NavBar;