import React, { useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from "./../../assets/images/logo.png";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedIn, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="light" expand="lg"  fixed="top">
                <div className="container">
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-3" />
                    </Form>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/result">result</Nav.Link>
                        <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/login">{ loggedIn.name ? loggedIn.name : loggedIn.email ? loggedIn.email : 'Login' }</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;