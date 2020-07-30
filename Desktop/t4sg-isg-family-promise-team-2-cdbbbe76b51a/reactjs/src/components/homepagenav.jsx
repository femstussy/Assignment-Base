import React, { Component } from 'react';
import {
  Nav, Navbar, Form, FormControl, Button, Container
} from 'react-bootstrap';
import styled from 'styled-components';



const styles = styled.div`

  text: {
    position: "absolute",
    color: "grey",
    fontSize: 36px,
    fontWeight: "bold"
  }

  .h3, h3 {
    font-size: 26px;
    line-height: 28px;
    font-weight: 500;
    margin-top: 35px;
    font-family: inherit
  }

`;


export const HomePageNav = () => (
    <styles>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
            <img src="https://familypromise.org/wp-content/themes/wideeyecreative/images/logo.png" alt="bug" height={50}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{fontSize: 20}} href="https://familypromise.org/">Family Promise Home Page</Nav.Link>
            <Nav.Link style={{fontSize: 20}} href="https://familypromise.org/contact-us-2/">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </styles>
)