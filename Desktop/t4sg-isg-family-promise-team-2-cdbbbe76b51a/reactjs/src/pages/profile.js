import React, { Component } from "react";
import { NavigationBar } from "../components/navbar";
import {
  Accordion,
  ProgressBar,
  Card,
  Button,
  ListGroup,
  Jumbotron,
  Container,
  Image,
  Row,
  Col,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import puppy from "../assets/cute-puppy.png";
import styled from "styled-components";

const Styles = styled.div`
  .aligncenter {
    text-align: center;
  }

  .background {
    background-color: #8d4982;
    font-family: "Montserrat", sans-serif;
  }
`;

class Profile extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Styles>
          <Jumbotron fluid>
            <ListGroup>
              <ListGroup.Item>
                <Container>
                  <div>
                    <Row>
                      <Col>
                        <Image
                          src={puppy}
                          roundedCircle
                          width="200"
                          height="200"
                        />
                      </Col>
                      <Col>
                        <h1>Puppy Peterson</h1>
                        <a href="/profile">puppy@gmail.com</a>
                        <span> - Animal Affiliate</span>
                        <p>Jersey City, New Jersey</p>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item>
                <Container>
                  <InputGroup align="center">
                    <p1> Username </p1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <FormControl
                        placeholder="puppy"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        align="center"
                      />
                    </span>
                  </InputGroup>
                  <br />
                  <br />
                  <InputGroup align="center">
                    <p1> Email </p1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <FormControl
                        placeholder="puppy"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                      />
                    </span>
                  </InputGroup>
                  <br />
                  <br />
                  <InputGroup align="center">
                    <p1> Password </p1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <FormControl
                        placeholder="puppy"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                      />
                    </span>
                  </InputGroup>
                  <br />
                  <br />
                  <InputGroup align="center">
                    <p1> Full Name </p1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <FormControl
                        placeholder="puppy"
                        aria-label="Full Name"
                        aria-describedby="basic-addon1"
                      />
                    </span>
                  </InputGroup>
                  <br />
                  <br />
                </Container>
              </ListGroup.Item>
              <ListGroup.Item>More to add</ListGroup.Item>
              <ListGroup.Item>More to add</ListGroup.Item>
            </ListGroup>
          </Jumbotron>
        </Styles>
      </>
    );
  }
}
export default Profile;
