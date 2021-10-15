import React from 'react';
import { Col,Container,NavLink,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-primary text-white p-4 text-center" id="footer">
            <Container>
             <Row>
             <Col lg={4}>
                    <NavLink as={Link} to="/home">Home</NavLink>
                    <NavLink as={HashLink} to="/home#services">Service</NavLink>
                    <NavLink as={HashLink} to="/home#doctors">Doctors</NavLink>
                
                </Col>
                <Col lg={4}>
                <NavLink as={Link} to="/about">About</NavLink>
                <NavLink as={Link} to="/contact">Contact</NavLink>
                <NavLink as={Link} to="/login">Login</NavLink>
                </Col>
                <Col lg={4}>
                    <h3>Kamal's Health Care</h3>
                    <p>CopyRight, &copy; by Akter Kamal & Jannatul Naim.</p>
                    <small>Passionate Web Developer & Web Learner.</small>
                </Col>
             </Row>
             </Container>
        </div>
    );
};

export default Footer;