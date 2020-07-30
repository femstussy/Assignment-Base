import React from "react";
import { Nav, Navbar, Form, FormControl, Image } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: # bg="light;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #004477;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/dashboard">
        <img
          src="https://familypromise.org/wp-content/themes/wideeyecreative/images/logo.png"
          alt="bug"
          height={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/certificates">Certificates</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/training1welcome">temp</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/profile">
              {/* <Dropdown>
            <Dropdown.Toggle alignLeft> */}
              <svg
                width="1em"
                viewBox="0 0 20 20"
                class="bi bi-person-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              {/* </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
