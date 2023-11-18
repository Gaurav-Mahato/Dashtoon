import React from "react";
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
// import "./bootstrap.min.css";


const Header = () => {
    return (
        <header>
        <Navbar bg="light" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand>DashToon</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
    </header>
    )
}

export default Header;