import React from "react";
import header from "../assets/header.svg";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand='lg' className='navBarHeader bg-transparent'>
      <Navbar.Brand>
        <img src={header} alt='Header'></img>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto nav_links'>
          <Nav.Link href='/'>
            <span className='nav_items'>Home</span>
          </Nav.Link>
          <Nav.Link href='/about'>
            <span className='nav_items'>About</span>
          </Nav.Link>
          <Nav.Link href='/contact'>
            <span className='nav_items'>Contact</span>
          </Nav.Link>
          <Nav.Link href='/upload'>
            <span className='nav_items'>Upload Notes</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
