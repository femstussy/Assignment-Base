import React from 'react';
import ReactDOM from 'react-dom';
import { Container,
    Row,
    Col,
    Button,
       } from 'react-bootstrap';
import { NavigationBar } from '../../../components/navbar';
import './example1.css';

class Question1 extends React.Component {
    // constructor() {}
    render() {
        return (
        <>
        <NavigationBar/>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div class="page-title text-center">
                            <h5 class="title">--Choose Your Character--</h5>
                            <h3 class="dark-color">Who Would You Like to Be?</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col class="choose" lg={{ span: 4, order: 1 }} md={{ span: 4, order: 1 }} s={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} >
                        <a href="dashboard" class="choose">
                            <Col class="team-box">
                                <div class="team-image">
                                    <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png" alt="" width="250" height="250"/>
                                </div>
                                <h5 class="position">New Volunteer, Famiily Promise</h5>
                                <p>Full Name: Amari Jocelyn Harris</p>
                                <p>Age: 26</p>
                                <p>Hometown: Jackson, Missisipi</p>
                                <p>Hobbies/Interests: Religion</p>
                            </Col>
                        </a>
                    </Col>
                    <Col class="choose" lg={{ span: 4, order: 2 }} md={{ span: 4, order: 2 }} s={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }} >
                        <a href="question2" class="choose">
                            <Col class="team-box">
                                <div class="team-image">
                                    <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png" alt="" width="250" height="250"/>
                                </div>
                                    <h5 class="position">New Volunteer, Family Promise</h5>
                                    <p>Full Name: Amari Jocelyn Harris</p>
                                    <p>Age: 26</p>
                                    <p>Hometown: Jackson, Missisipi</p>
                                    <p>Hobbies/Interests: Religion</p>
                            </Col>
                        </a>
                    </Col>
                    <Col class="choose" lg={{ span: 4, order: 3 }} md={{ span: 4, order: 3 }} s={{ span: 12, order: 3 }} xs={{ span: 12, order: 3 }} >
                        <a href="dashboard" class="choose">
                            <Col class="team-box">
                                <div class="team-image">
                                    <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png" alt="" width="250" height="250"/>
                                </div>
                                <h5 class="position">New Volunteer, Family Promise</h5>
                                <p>Full Name: Sushi person</p>
                                <p>Age: 47</p>
                                <p>Hometown: Bogota, Colombia</p>
                                <p>Hobbies/Interests: Homeless</p>
                            </Col>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
      );
    }
  }
   export default Question1;