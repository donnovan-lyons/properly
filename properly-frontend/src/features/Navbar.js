import React/*, { useState }*/ from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux';
import { selectToken } from './authSlice';

const NavBar = () => {

    const token = useSelector(selectToken);

    const authorizationOptions = function () {
        if (token) {
            return (
            <>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/messages">Messages</NavDropdown.Item>
                <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
            </NavDropdown>
            </>
            )
        } else {
            return (
            <>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            </>
            )
        }
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Properly
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Write a Review</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        {authorizationOptions()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;