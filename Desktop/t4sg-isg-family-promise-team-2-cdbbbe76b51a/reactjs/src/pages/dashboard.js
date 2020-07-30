import React, { Component } from "react";
import {
  Accordion,
  ProgressBar,
  Card,
  Button,
  ListGroup,
  Jumbotron,
  Image,
  Container,
  Toast,
} from "react-bootstrap";
import styled from "styled-components";
import { NavigationBar } from "../components/navbar";
import "../App.css";
import gradcap from "../assets/gradcap.png";
import dash_img from "../assets/dashboard_image.png";

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

  .aligncenter {
    text-align: center;
}

.background {
  background-color: #8d4982;
  font-family: 'Montserrat', sans-serif;
}



`;

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Styles>
          <head>
            <title>Dashboard</title>
          </head>
          <div>
            <body>
              <br />
              <Jumbotron>
                <h1 align="center">Welcome, User!</h1>
                <h2 align="center">
                  "Spreading the word will help transform the lives of ONE
                  MILLION children by 2030"
                </h2>
                <br />
                <p class="aligncenter">
                  <table>
                    <tr>
                      <td>
                        <Toast>
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded mr-2"
                              alt=""
                            />
                            <strong className="mr-auto">Trainings</strong>
                            <small>11 mins ago</small>
                          </Toast.Header>
                          <Toast.Body>
                            2 new trainings added to your curriculum!
                          </Toast.Body>
                        </Toast>
                      </td>
                      <td>
                        <Toast>
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded mr-2"
                              alt=""
                            />
                            <strong className="mr-auto">Family Promise </strong>
                            <small>2 hours ago</small>
                          </Toast.Header>
                          <Toast.Body>
                            We appreciate you! Keep it up!
                          </Toast.Body>
                        </Toast>
                      </td>
                      <td>
                        <Toast>
                          <Toast.Header>
                            <img
                              src="holder.js/20x20?text=%20"
                              className="rounded mr-2"
                              alt=""
                            />
                            <strong className="mr-auto">New Jersey</strong>
                            <small>1 day ago</small>
                          </Toast.Header>
                          <Toast.Body>We've reached --- volunteers!</Toast.Body>
                        </Toast>
                      </td>
                    </tr>
                  </table>
                </p>
                <br />

                <h2 align="center">Trainings</h2>
                <div align="center">
                  <ProgressBar
                    striped
                    variant="success"
                    now={90}
                    label="Required"
                  />
                  <ProgressBar
                    striped
                    variant="warning"
                    now={60}
                    label="Recommended"
                  />
                  <ProgressBar
                    striped
                    variant="danger"
                    now={25}
                    label="Personalized"
                  />
                </div>

                <table align="center" cellpadding="100">
                  <tr>
                    <td>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              Required
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <ListGroup>
                                <ListGroup.Item
                                  action
                                  variant="warning"
                                  action
                                  href="/training1welcome"
                                >
                                  Training 1
                                </ListGroup.Item>
                                <ListGroup.Item action variant="success">
                                  Training 2
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                  Training 3
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                  Trainng 4
                                </ListGroup.Item>
                                <ListGroup.Item action variant="success">
                                  Trainng 5
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </td>
                    <td>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              Recommended
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <ListGroup>
                                <ListGroup.Item action variant="success">
                                  Training 1
                                </ListGroup.Item>
                                <ListGroup.Item action variant="warning">
                                  Training 2
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                  Training 3
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                  Trainng 4
                                </ListGroup.Item>
                                <ListGroup.Item action variant="success">
                                  Trainng 5
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </td>
                    <td>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              Personalized
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <ListGroup>
                                <ListGroup.Item action variant="success">
                                  Training 1
                                </ListGroup.Item>
                                <ListGroup.Item action variant="warning">
                                  Training 2
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                  Training 3
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                  Trainng 4
                                </ListGroup.Item>
                                <ListGroup.Item action variant="success">
                                  Trainng 5
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </td>
                  </tr>
                </table>
              </Jumbotron>
            </body>
          </div>
        </Styles>
      </>
    );
  }
}

export default Dashboard;
