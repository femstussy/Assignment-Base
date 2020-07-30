import React from 'react';
import ReactDOM from 'react-dom';
import { Container,
    Row,
    Col,
    Button,
    Jumbotron,
    Card,
    CardImg
       } from 'react-bootstrap';
import { NavigationBar } from '../../../components/navbar';
import './example1.css';
import Dashboard from '../../dashboard';
import ReactPlayer from "react-player"
import { HashLink as Link } from 'react-router-hash-link';

class Question5 extends React.Component {
    // constructor() {}
    render() {
        return (
        <>
        <NavigationBar/>                                                                                    
        <Container>
            <Row>
                <Col xs={12} s={12} m={6} l={6}>
                    <div class="page-title text-center">
                        <h5 class="title">We will begin by showing you a short video</h5>
                        <h3 class="dark-color">After the video, click next to follow the continuing steps</h3>
                    </div>
                    <div className="player-wrapper">
                        <ReactPlayer
                            className="react-player"
                            url="https://www.youtube.com/watch?v=e_XyS4-bsf8"
                            controls
                            width="100%"
                            height="100%"
                            muted
                        />
                    </div>
                </Col>
                <Col>
                    <Button variant="outline-primary" size="lg" block className="next-button">
                        <Link
                            smooth
                            to="/question2#questions">
                                Next
                        </Link>
                    </Button>
                </Col>
            </Row>

            <div id="questions">
                <Row>
                    <Col m={3} l={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pinclipart.com/picdir/middle/149-1490029_clip-art-details-young-boy-clipart-png-download.png" />
                            <Card.Body>
                                <Card.Title>Pick the boy</Card.Title>
                                <Card.Text>
                                Here, pick the boy
                                </Card.Text>
                                <Button variant="outline-primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col m={3} l={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/743/168/png-clipart-old-lady-old-lady-kind.png" />
                            <Card.Body>
                                <Card.Title>Pick the boy</Card.Title>
                                <Card.Text>
                                Here, pick the boy
                                </Card.Text>
                                <Button variant="outline-primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col m={3} l={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.netclipart.com/pp/m/89-899536_businessman-clipart-business-person-business-person-clip-art.png" />
                            <Card.Body>
                                <Card.Title>Pick the boy</Card.Title>
                                <Card.Text>
                                Here, pick the boy
                                </Card.Text>
                                <Button variant="outline-primary">Select</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
        );
    }
}

export default Question5;