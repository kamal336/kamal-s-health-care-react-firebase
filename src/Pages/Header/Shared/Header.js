import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../contexts/useAuth';



import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
            <Navbar bg="primary" expand="lg" sticky="top" >
            <Container>
                 <Navbar.Brand className="text-white" href="#home"><img   className="rounded-circle" width="60px" src="https://thumbs.dreamstime.com/b/initial-k-monogram-alphabet-doctor-stethoscope-vector-logo-icon-medical-pharmaceutical-business-company-identity-226751270.jpg" alt="" /> Kamal's Health Care</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ms-auto">
                    <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/contact">Contact</Nav.Link>
                    { user.email?  <Navbar.Text className="text-white border rounded px-1" >
                       Logged as: {user.displayName}
                    </Navbar.Text>:<Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
                    }

                     {/* logout  */}
                    {user.email&&<Nav.Link className="text-white" onClick={logOut}>Logout</Nav.Link>}
                   
                 
                 </Nav>
                 </Navbar.Collapse>
             </Container>
          </Navbar>
        </div>
    );
};

export default Header;