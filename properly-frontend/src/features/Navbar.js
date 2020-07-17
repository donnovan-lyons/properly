import React/*, { useState }*/ from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Properly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Write a Review</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        {/* <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/messages">Messages</NavDropdown.Item>
                            <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                            <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;