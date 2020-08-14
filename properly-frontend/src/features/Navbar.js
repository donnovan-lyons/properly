import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux';
import { selectExpiresAt } from './authSlice';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const expiresAt = useSelector(selectExpiresAt);

    const authorizationOptions = function () {
        if (expiresAt) {
            return (
            <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/messages">Messages</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/reviews">Reviews</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/account">Account</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/logout">Log out</NavDropdown.Item>
            </NavDropdown>
            )
        } else {
            return (
            <>
            <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
            <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
            </>
            )
        }
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={NavLink} to="/">
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
                        <Nav.Link as={NavLink} to="#">Write a Review</Nav.Link>
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