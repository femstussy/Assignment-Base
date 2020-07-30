import React, { Component, useState } from "react";
import { NavigationBar } from "../components/navbar";
import "./login.css";

//function Login() {
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  validate() {
    if (this.state.username == "team2" && this.state.password == "pswd") {
      this.setState({
        open: true,
        message: "You have successfully signed in!",
      });
    } else {
      this.setState({
        open: true,
        message: "Incorrect username or password!",
      });
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Page">
        <NavigationBar />

        <div className="login-section">
          <h1>Sign In</h1>
          <div className="form-section">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-10" for="username">
                  Username:
                </label>
                <div class="col-sm-10">
                  <input
                    type="username"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                  ></input>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-10" for="password">
                  Password:
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                  ></input>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg logodarkpurple"
                    onClick={() => {
                      this.validate();
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  /* Material UI

  render() {
    return (
      <div className = "Page">
      <NavigationBar />
      <div className = 'login-section'>
        <label for="username"><b>Username</b></label>
        <TextField
          variant = "standard"
          placeholder = "Username"
          margin = "normal"
          required
          onChange = {this.setUsername}
          value = {this.state.username}
        />
        <label for="password"><b>Password</b></label>
        <TextField
          variant = "standard"
          placeholder = "Password"
          margin = "none"
          required
          onChange = {this.setPassword}
          value = {this.state.password}
        />
        <div className="Button">
          <Button
            variant = "contained"
            color = "primary"
            onClick = {() => {
              this.validate();
            }}
          >
          Sign In
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      </div>

    );
  } */
}

export default Login;
