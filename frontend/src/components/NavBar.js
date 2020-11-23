import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import header from "../assets/header.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg='light' expand='lg' className='navBar'>
      <Navbar.Brand>
        <Link to='/'>
          <img src={header} alt='Header'></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto nav_links'>
          <Nav.Link href='/about'>
            <span className='nav_items'>About</span>
          </Nav.Link>
          <Nav.Link href='/contact'>
            <span className='nav_items'>Contact</span>
          </Nav.Link>
          <Nav.Link href='/discuss'>
            <span className='nav_items'>Discuss</span>
          </Nav.Link>
          <Nav.Link href='/upload'>
            <span className='nav_items'>Upload Notes</span>
          </Nav.Link>
          {userInfo ? (
            <NavDropdown title={userInfo.name}>
              {userInfo.isAdmin && (
                <>
                  <Nav.Link href='/admin/issues'>
                    <span className='nav_items'>Issues</span>
                  </Nav.Link>
                  <Nav.Link href='/admin/approveNotes'>
                    <span className='nav_items'>Approve Notes</span>
                  </Nav.Link>
                </>
              )}
              <Nav.Link onClick={logoutHandler}>
                <span className='nav_items'>Logout</span>
              </Nav.Link>
            </NavDropdown>
          ) : (
            <Nav.Link href='/login'>
              <span className='nav_items'>Sign In</span>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
