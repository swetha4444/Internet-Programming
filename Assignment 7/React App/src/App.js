import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Home from "./Home";
import Commitee from "./Commitee";
import Call from "./Call";
import Important from "./Important";
import Workshop from "./Workshop";
import Register from "./Register";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/commitee">
            <Commitee />
          </Route>
          <Route path="/call">
            <Call />
          </Route>
          <Route path="/imp">
            <Important />
          </Route>
          <Route path="/workshop">
            <Workshop />
          </Route>
          <Route path="/registration">
            <Register />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
