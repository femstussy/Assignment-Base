import React, { Component } from "react";
import "./Signup.css";
import { NavigationBar } from "../components/navbar";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="sign-up-section">
        <NavigationBar />

        <form onSubmit={this.handleSubmit}>
          <div style={{ padding: "16px" }} class="container">
            <h1>Family Promise</h1>
            <hr></hr>

            <h2>Register</h2>
            <hr></hr>

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            ></input>

            <label for="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
              required
            ></input>

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            ></input>

            <label for="psw-repeat">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="psw-repeat"
              id="psw-repeat"
              required
            ></input>

            <label for="zipcode">
              <b>Zip code</b>
            </label>
            <input
              type="text"
              placeholder="Enter Zipcode"
              name="zipcode"
              id="zipcode"
              required
            ></input>
            <hr></hr>

            <button type="submit" class="registerbtn">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
