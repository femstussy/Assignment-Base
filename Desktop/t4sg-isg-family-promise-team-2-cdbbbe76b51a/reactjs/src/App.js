import React from "react";
import { Link } from "react-router";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/navbar";

// <img src={logo} className="App-logo" alt="logo" />

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
      </>
    );
  }
}

export default App;
