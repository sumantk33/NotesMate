import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container>
      <Navbar bg='transparent' expand='lg' className='navbar-dark navBarHeader'>
        <Link to='/'>
          <Navbar.Brand style={{ marginLeft: "30px" }}>
            <h3>NotesMate</h3>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Link to='/' style={{ color: "white", marginLeft: "120vh" }}>
            <Button style={{ backgroundColor: "transparent", width: "100px" }}>
              Discuss
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
