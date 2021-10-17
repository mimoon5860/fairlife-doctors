import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    console.log(user)

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
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><button className="button">Home</button></Nav.Link>
                            <Nav.Link as={Link} to="/healthcare"><button className="button">Health Care</button></Nav.Link>
                            <Nav.Link as={Link} to="/contact"><button className="button">Contact</button></Nav.Link>
                            <Nav.Link as={Link} to="/about"><button className="button">About</button></Nav.Link>
                            <Nav.Link as={Link} to="/vaccine"><button className="vaccine-button">Covid-19 Vaccine</button></Nav.Link>
                        </Nav>

                        <Nav>
                            {
                                !user.email ?
                                    <Nav.Link as={Link} to="/login"><button className="button"><i className="fas fa-sign-in-alt"></i> Login</button></Nav.Link>
                                    :
                                    <div><p className="text-white d-md-inline me-md-3">{user.displayName}</p>
                                        <button onClick={logOut} className="button"><i className="fas fa-sign-out-alt"></i> Logout</button></div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;