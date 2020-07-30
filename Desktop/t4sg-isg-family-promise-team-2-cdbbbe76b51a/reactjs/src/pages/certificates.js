import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, Image } from "react-bootstrap";
import styled from "styled-components";
import { NavigationBar } from "../components/navbar";

const Certificates = () => (
  <>
    <NavigationBar />
    <main role="main">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Certificates</h1>
          <p>
            Congratulations on your awards you can view your Certificates on
            this page!!
          </p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Certificate of Completion</h2>
            <p>
              Congratulations on completing this training for your hard work
              here is your Certificate for completion. Keep working hard to earn
              more!!{" "}
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View Certificate &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Certificate of Completion</h2>
            <p>
              Congratulations on completing this training for your hard work
              here is your Certificate for completion. Keep working hard to earn
              more!{" "}
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View Certificate &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Certificate of Completion</h2>
            <p>
              Congratulations on completing this training for your hard work
              here is your Certificate for completion. Keep working hard to earn
              more!!
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View Certificate &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>

    <footer class="container">
      <p>&copy; Certificate Status</p>
    </footer>
  </>
);

export default Certificates;
