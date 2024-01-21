/*
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function BasicNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="myColor" variant="primary">
      <Container>
        <Navbar.Brand href="/home">Nutrition Helper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/scanner">Scanner</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/macros">Macro Tracker</NavDropdown.Item>
              <NavDropdown.Item href="/allergens">Allergen Tracker</NavDropdown.Item>
              <NavDropdown.Item>More features coming soon!</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavBar;
*/

import { useState } from "react";
import "./NavBar.css";
import icon from '../images/icon1.png'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img className="icon" src={icon} alt="Description" />
      <a href="/home" className="brand-name">
        Nutritional Helper
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a className="Home" href="/home">Home</a>
          </li>
          <li>
            <a className="Scanner" href="/scanner">Scanner</a>
          </li>
          <li>
            <a className="Macros" href="/macros">Macro Tracker</a>
          </li>
          <li>
            <a className="Allergens" href="/allergens">Allergen Tracker</a>
          </li>
          <li>
            <a className="Login" href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
