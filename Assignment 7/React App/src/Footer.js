import "./style.css";
import React, { Component } from "react";

export default function() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="wrap">
        <div className="cont">
          <div className="box google" style={{ textAlign: "center" }}>
            <i className="fa fa-google" style={{ marginTop: "10px" }} />
          </div>
        </div>

        <div className="cont">
          <div className="box facebook" style={{ textAlign: "center" }}>
            <i className="fa fa-facebook" style={{ marginTop: "10px" }} />
          </div>
        </div>

        <div className="cont">
          <div className="box linkedin" style={{ textAlign: "center" }}>
            <i className="fa fa-linkedin" style={{ marginTop: "10px" }} />
          </div>
        </div>

        <div className="cont">
          <div className="box twitter" style={{ textAlign: "center" }}>
            <i className="fa fa-twitter" style={{ marginTop: "10px" }} />
          </div>
        </div>

        <div className="cont">
          <div className="box youtube" style={{ textAlign: "center" }}>
            <i className="fa fa-youtube" style={{ marginTop: "10px" }} />
          </div>
        </div>
      </div>

      <footer>
        <p align="center" style={{ color: "white" }}>
          © Copyright All Rights Reserved 2021
        </p>
      </footer>
    </div>
  );
}
