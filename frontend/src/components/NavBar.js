import React from "react";
import logo from "../assets/334.jpg";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand='lg' className='navBarHeader'>
      <Navbar.Brand>
        <img src={logo} alt='Logo'></img>
      </Navbar.Brand>
      <Navbar.Brand>
        <h2>NotesMate</h2>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto nav_links'>
          <Nav.Link href='/'>
            <Button className='button btn-sm'>
              <h6>Home</h6>
            </Button>
          </Nav.Link>
          <Nav.Link href='/'>
            <Button className='button btn-sm'>
              <h6>Contact</h6>
            </Button>
          </Nav.Link>
          <Nav.Link href='/'>
            <Button className='button btn-sm'>
              <h6>About</h6>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
