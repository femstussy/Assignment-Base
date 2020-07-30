import React, { Component } from "react";
import {
  Button,
  Container,
  Card,
  ListGroup,
  MenuItem,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import styled from "styled-components";
import { HomePageNav } from "../components/homepagenav";
import FamilyPromiseLocations from "../assets/FamilyPromiseLocations.png";

const styles = styled.div`
  .element.style: {
    background-image: url("https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1-632x329.jpg");
    height: 300px;
  },
  text: {
    position: "absolute",
    color: "grey",
    fontSize: 100px,
    fontWeight: "bold"
  }
  .container, .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
}
  .h3, h3 {
    font-size: 26px;
    line-height: 28px;
    font-weight: 500;
    margin-top: 35px;
    font-family: inherit
  }

  .h4, h4 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 300;
    margin-top: 45px;
    font-family: inherit;
  }

  h5, .h5 {
    font-size: 3.0rem;
  }

  #gallery-1 {
    margin: auto;
  }

  #gallery-1 .gallery-item {
    float: left;
    margin-top: 10px;
    text-align: center;
    width: 20%;
  }

  #gallery-1 img {
    border: 2px solid #cfcfcf;
  }

  #gallery-1 .gallery-caption {
    margin - left: 0;
    text-align: center;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  #topper {
    text-align: center;
    margin-top: 78px;
    padding-top: 115px;
    margin-bottom: -47px;
    overflow: hidden;
  }

  #topper.add-color {
    background-color: #006ab3;
    text-align: left;
    margin-bottom: 0;
    padding-top: 100px;
    padding-bottom: 70px;
}

.dropdown-menu {
  height: 70px;
  overflow-y: scroll;
}
`;

const Home = () => (
  <div>
    <HomePageNav />
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://familypromise.org/wp-content/uploads/2019/05/Group-of-kids2-1.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Card.Title style={{ fontSize: 60 }}>
          Family Promise Virtual Portal
        </Card.Title>
        <div className="mb-2">
          &nbsp;&nbsp;&nbsp;
          <Button margin="5px" variant="info" size="lg" href="/Login">
            Login
          </Button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button margin-left="10px" variant="info" size="lg" href="/signup">
            Sign Up
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
    <Container>
      <div className="col-md-10 col-md-offset-1">
        <h3>About our Volunteer Program</h3>
        <p>
          As part of our commitment to Affiliates and their volunteers, Family
          Promise has teamed up with Capgemini to create a volunteer training
          series with the goal of equipping volunteers for their work with guest
          families. This video series prepares volunteers, both at host sites
          and in Day Centers, because whether you’re sharing a meal or a
          life-skill, your gift of time changes lives of children and their
          families experiencing homelessness.
        </p>
        <p>
          Each module is between 5 and 8 minutes long. Volunteers are asked to
          view each module then complete a brief assessment, after viewing all
          of them. Each video covers a specific aspect of volunteer engagement.
        </p>
        <p>
          In these videos, you will hear from
          <a href="https://familypromise.org/guest-advisory-council/">
            {" "}
            Guest Advisory Council (GAC)
          </a>
          members who share their experience, as past guests, and from their
          current work with Affiliates. These interviews were filmed at our
          National Conference in 2019, as part of a project to document their
          stories. Because of the personal nature of the content, we chose to
          film in a casual setting, rather than a formal sound studio. As a
          result, you may notice that there are moments of variable sound
          quality which is why we’ve supplied subtitles.
        </p>
        <p>
          The following Guest Advisory Council members were interviewed for
          these videos:
        </p>
        <div>
          <table align="center" cellpadding="25">
            <tr>
              <td>
                <img
                  width="150"
                  height="150"
                  src="https://familypromise.org/wp-content/uploads/2020/04/Rebecca-2-150x150.jpeg"
                  class="attachment-thumbnail size-thumbnail"
                  alt=""
                  aria-describedby="gallery-1-42004"
                />
                <figcaption>Rebecca Esparza</figcaption>
              </td>
              <td>
                <img
                  width="150"
                  height="150"
                  src="https://familypromise.org/wp-content/uploads/2017/03/Sarah-Jackson-2-150x150.jpg"
                  class="attachment-thumbnail size-thumbnail"
                  alt=""
                  aria-describedby="gallery-1-5327"
                  srcset="https://familypromise.org/wp-content/uploads/2017/03/Sarah-Jackson-2-150x150.jpg 150w, https://familypromise.org/wp-content/uploads/2017/03/Sarah-Jackson-2-300x300.jpg 300w, https://familypromise.org/wp-content/uploads/2017/03/Sarah-Jackson-2-768x768.jpg 768w, https://familypromise.org/wp-content/uploads/2017/03/Sarah-Jackson-2.jpg 1017w"
                  sizes="(max-width: 150px) 100vw, 150px"
                />
                <figcaption>Sarah Jackson</figcaption>
              </td>
              <td>
                <img
                  width="150"
                  height="150"
                  src="https://familypromise.org/wp-content/uploads/2016/03/Yusuf1-150x150.jpeg"
                  class="attachment-thumbnail size-thumbnail"
                  alt=""
                  aria-describedby="gallery-1-4266"
                  srcset="https://familypromise.org/wp-content/uploads/2016/03/Yusuf1-150x150.jpeg 150w, https://familypromise.org/wp-content/uploads/2016/03/Yusuf1-300x300.jpeg 300w, https://familypromise.org/wp-content/uploads/2016/03/Yusuf1.jpeg 320w"
                  sizes="(max-width: 150px) 100vw, 150px"
                />
                <figcaption>Yusuf Kalule</figcaption>
              </td>
              <td>
                <img
                  width="150"
                  height="150"
                  src="https://familypromise.org/wp-content/uploads/2019/04/Kat-Lilley-1-150x150.jpg"
                  class="attachment-thumbnail size-thumbnail"
                  alt="Kat Lilley"
                  aria-describedby="gallery-1-12053"
                />
                <figcaption>Kat Lilley</figcaption>
              </td>
              <td>
                <img
                  width="150"
                  height="150"
                  src="https://familypromise.org/wp-content/uploads/2016/03/Theresa-Pinger-150x150.jpg"
                  class="attachment-thumbnail size-thumbnail"
                  alt=""
                  aria-describedby="gallery-1-7114"
                />
                <figcaption>Theresa Pinger</figcaption>
              </td>
            </tr>
          </table>
        </div>
        <br />
      </div>
      <Container>
        <h3>Our Affliates Locations:</h3>
        <DropdownButton
          alignRight
          title="Locations"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Glencoe, IL</Dropdown.Item>
          <Dropdown.Item eventKey="2">Camp Hill, PA</Dropdown.Item>
          <Dropdown.Item eventKey="3">Ramsay, MN</Dropdown.Item>
          <Dropdown.Item eventKey="4">Wasilla, AK</Dropdown.Item>
          <Dropdown.Item eventKey="4">Natick, MA</Dropdown.Item>
          <Dropdown.Item eventKey="4">Beverly, MA</Dropdown.Item>
          <Dropdown.Item eventKey="4">Lafayette, LA</Dropdown.Item>
          <Dropdown.Item eventKey="4">Aiken, SC</Dropdown.Item>
        </DropdownButton>
        <br></br>

        <div className="bg">
          {" "}
          <img src={FamilyPromiseLocations} width="100%" height="100%" />{" "}
        </div>
      </Container>

      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-auto">
            <h5> Number of Volunteers: </h5> <br />
            <h1>200,000+</h1>
          </div>
          <div class="col-auto">
            <h5> Volunteer Time Value: </h5> <br />
            <h1>$57,284,415</h1>
          </div>
          <div class="col-auto">
            <h5> Volunteer Hours Served: </h5> <br />
            <h1>2,252,631+</h1>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </Container>
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://familypromise.org/wp-content/uploads/2019/06/010-4.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Card.Title style={{ fontSize: 40 }}>
          Coronavirus Pandemic: Families at risk of homelessness need your help
          today
        </Card.Title>
        <Button
          size="lg"
          href="https://familypromise.org/give"
          class="btn-base-hollow btn-action-alt-hollow has-arrow"
        >
          Donate Today
        </Button>{" "}
      </Card.ImgOverlay>
    </Card>
  </div>
);

export default Home;
