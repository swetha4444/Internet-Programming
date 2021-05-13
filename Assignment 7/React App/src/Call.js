import "./style.css";
import React, { Component } from "react";

export default function Call() {
  return (
    <body>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "40px", marginLeft: "55px" }}>
        <h1>Conference Call for Papers</h1>
      </div>
      <article className="container">
        <p>
          The 3rd International Conference on Advanced Research in Social
          Sciences (ICARSS), March 11 – 14, 2021 in Oxford, United Kingdom, is
          the premier forum for the presentation of new advances and research
          results in education theory and practice.
        </p>
        <p>
          This conference is a prestigious event, organized to provide an
          international platform for the academicians, researchers, managers,
          industrial participants and students to share their research findings
          with global experts. All full paper submissions will be peer reviewed
          and evaluated based on originality, technical and/or research depth,
          accuracy and relevance to conference call for papers.
        </p>
        <a style={{ color: "rgb(76, 76, 207)" }}>
          <em>Submission Format</em>
        </a>
        <br />
        Authors must follow the Springer LNCS formatting instructions. For
        camera-ready papers use Latex or Word style. Each paper will receive at
        least three reviews. At least one author of each accepted paper must
        register by the early registration date indicated on the conference
        website and present the paper.
      </article>

      <article className="sidebyside" style={{ clear: "both" }}>
        <section className="left">
          <aside>
            <h3>Sociology</h3>
            <ul>
              <li>Aging</li>
              <li>Applied Anthropology</li>
              <li>Archaeology</li>
              <li>Black Lives Matter</li>
              <li>Elderly care</li>
              <li>Child Research</li>
              <li>Childhood Development & Schooling</li>
            </ul>
          </aside>
        </section>
        <section className="right">
          <h2>Philosophy</h2>
          <ul>
            <li>Pragmatism</li>
            <li>Realism</li>
            <li>Romanticism</li>
            <li>Social Philosophy</li>
            <li>Transcendentalism</li>
            <li>Utilitarianism</li>
            <li>Western Philosophy</li>
          </ul>
        </section>
        <br />
      </article>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </body>
  );
}
