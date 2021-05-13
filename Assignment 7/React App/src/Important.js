import "./style.css";
import React, { Component } from "react";

export default function Important() {
  return (
    <body>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "40px", marginLeft: "55px" }}>
        <h1>Dates of Importance</h1>
      </div>

      <article className="container">
        <table>
          <thead style={{ fontSize: "25px" }}>
            <tr>
              <th>Event</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Paper Submission Opens</td>
              <td>
                <strong>December 01, 2020</strong>
              </td>
            </tr>

            <tr>
              <td>Paper Submission Closes:</td>
              <td>
                <strong>January 31, 2021</strong>
              </td>
            </tr>

            <tr>
              <td>Acceptance Notification</td>
              <td>
                <strong>February 15, 2021</strong>
              </td>
            </tr>

            <tr>
              <td>Camera Ready Submission&nbsp;</td>
              <td>
                <strong>March 10, 2021</strong>
              </td>
            </tr>

            <tr>
              <td>Pre Conference Workshop&nbsp;</td>
              <td>
                <strong>March 18, 2021</strong>
              </td>
            </tr>

            <tr>
              <td>Conference</td>
              <td>
                <strong>&nbsp;March 18,19 and 20, 2021</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </body>
  );
}
