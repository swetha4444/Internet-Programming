import "./style.css";
import React, { Component } from "react";

export default function Register() {
  return (
    <body>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "40px", marginLeft: "55px" }}>
        <h1>Register Now!</h1>
      </div>

      <section className="container">
        <p>
          The registration fee for different categories of participants is
          mentioned in the table below. The registration fee for main conference
          with workshop will cover conference & workshop, full access to all
          sessions/invited talks including the pre-conference workshop.
        </p>
        <p>
          Currently the only possible mode of payment is NEFT/RTGS for Indian
          participants and wire transfer for foreign participants. The required
          bank details are mentioned below:
        </p>
        <ul>
          <li>
            Bank Account Holders Name :: The Principal SSN College of
            Engineering
          </li>
          <li>Bank A/c Name (NEFT/RTGS/E-Payment) :: 158100050070022</li>
          <li>Bank Name :: Tamilnad Mercantile Bank</li>
          <li>IFSC/MICR Code :: TMBL0000158 / 600060010</li>
          <li>Swift Code :: TMBLINBBCHE</li>
        </ul>
      </section>

      <section className="container" style={{ paddingTop: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          REGISTER NOW!
        </h2>
        <section className="form">
          <form id="regs" action="#">
            <label for="name">Name</label>
            <input className="form-input" type="text" id="name" />
            <br />
            <br />

            <label for="email">Email ID</label>
            <input className="form-input" type="text" id="email" />
            <br />

            <label for="phone">Contact</label>
            <input
              className="form-input"
              type="text"
              style={{ width: "70%" }}
              id="phone"
            />
            <br />

            <div className="horizontal-group">
              <label className="label-title">Gender</label>
              <select
                className="form-input"
                id="level"
                style={{ width: "40%" }}
              >
                <option value="B">Male</option>
                <option value="I">Female</option>
                <option value="A">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label for="choose-file" className="label-title">
                Write to us
              </label>
              <textarea
                className="form-input"
                rows="4"
                cols="50"
                style={{ height: "auto" }}
              />
            </div>

            <input type="submit" value="Register" className="btn" />
            <br />
          </form>
        </section>
      </section>
    </body>
  );
}
