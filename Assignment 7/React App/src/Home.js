import "./style.css";
import React, { Component } from "react";

export default function Home() {
  return (
    <body>
      <br />
      <br />
      <br />
      <br />
      <marquee style={{ margin: "10px" }}>
        <h3>
          Marquee Text: The conference footer would appear on all pages. The
          text is as follows, on a single centred line: 2019 International
          Conference on Indoor Positioning and Indoor Navigation (IPIN), 30
          Sept. - 3 Oct. 2019, Pisa, Italy
        </h3>
      </marquee>

      <div className="element" />

      <div style={{ margin: "40px", marginLeft: "55px" }}>
        <h1>ABOUT US</h1>
      </div>
      <article className="container">
        <section>
          <p>
            International Conference Alerts provides details about the upcoming
            academic conferences, seminars and workshops to be held worldwide.
            Academician and professionals can get their relevant updates and
            conference alerts through International conference alerts.
            International Conference Alerts provides a free subscription to its
            users with email notifications about upcoming Medical conferences,
            Engineering conferences, Business and Economics, Science and
            education and various conferences. Users can register and subscribe
            to get free conference alerts regarding upcoming international
            conferences 2021 at Dubai, Germany, Singapore, Thailand, USA as well
            as all major cities and countries across the world. This is the
            exact reason why internationalconferencealerts.com was established -
            to provide the masses, up-to-date and incredibly reliable
            information on all upcoming conferences, in a variety of fields.
          </p>
        </section>
        <section>
          <p>
            Many prominent and successful researchers, scientists and scholars
            have attributed their success to international conferences that they
            attended early on in their careers. They cited the great learning,
            networking, and collaborative opportunities that these conferences
            present, as being the reason for their success. International
            Conference Alerts offers conference organizers/planners the
            provision to better target potential conference delegates by
            allowing them to add details about their upcoming events to our
            existing conference listings. Numerous conference organizers and
            planners have witnessed remarkable growth in attendance at their
            events, after posting information about these events on our website!
            So take advantage of these provisions and expand your career or
            learn more about the latest developments in your field, today.
          </p>
        </section>
      </article>
    </body>
  );
}
