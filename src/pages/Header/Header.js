import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className="border header-logo rounded-pill px-3 py-1">
                            <h4 className="mb-0 letter-spacing-sm">FairLife <i className="fas fa-user-md "></i></h4><h4 className="mb-0 letter-spacing-md">DOCTORS</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="header">
                        <Nav className="me-auto d-flex align-items-center">
                            <Nav.Link as={NavLink} className="button" to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} className="button" to="/healthcare">Health Care</Nav.Link>
                            <Nav.Link as={NavLink} className="button" to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} className="button" to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} className="vaccine-button text-danger" to="/vaccine">Covid-19 Vaccine</Nav.Link>
                        </Nav>

                        <Nav>
                            {
                                !user.email ?
                                    <Nav.Link as={NavLink} activeClassName="active" className="button" to="/login"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                                    :
                                    <div><p className="text-white d-md-inline me-md-3">{user.displayName}</p>
                                        <button as={NavLink} onClick={logOut} className="button"><i className="fas fa-sign-out-alt"></i> Logout</button></div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;