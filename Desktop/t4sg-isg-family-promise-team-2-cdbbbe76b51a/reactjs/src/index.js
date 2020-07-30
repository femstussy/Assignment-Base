import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Dashboard from "./pages/dashboard.js";
import About from "./pages/about";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import PageNotFound from "./pages/404";
import Certificates from "./pages/certificates";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PageOne from "./pages/training/example1/welcomepage";
import Question1 from "./pages/training/example1/question1";
import Question2 from "./pages/training/example1/question2";
import Question3 from "./pages/training/example1/question3";
import Question4 from "./pages/training/example1/question4";
import Question5 from "./pages/training/example1/question5";
import Survey from "./pages/survey";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={Profile} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/training1welcome" component={PageOne} />
        <Route path="/question1" component={Question1} />
        <Route path="/question2" component={Question2} />
        <Route path="/question3" component={Question3} />
        <Route path="/question4" component={Question4} />
        <Route path="/question5" component={Question5} />
        <Route path="/survey" component={Survey} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
