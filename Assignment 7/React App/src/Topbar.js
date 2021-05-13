import "./style.css";
import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div>
      <nav>
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/commitee">Commitee</Link>
        </a>
        <a>
          <Link to="/call">Call For Papers</Link>
        </a>
        <a>
          <Link to="/imp">Important Dates</Link>
        </a>
        <a>
          <Link to="/workshop">Workshops</Link>
        </a>
        <a>
          <Link to="/registration">Register</Link>
        </a>
        <a>
          <Link to="/contact">Contact Us</Link>
        </a>
      </nav>
    </div>
  );
}
