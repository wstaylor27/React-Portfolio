import React from "react";

import "../../styles/style.css";
import "../../styles/reset.css";

export default function Portfolio() {
  return (
    <div>
      <main>
        {/* <!-- Projects Area --> */}
        <section id="projects" className="projects">
          <aside>
            <h4>Projects</h4>
          </aside>
          <section className="cards">
            <article className="card card--1">
              <div className="card__img"></div>
              <a
                href="https://check-mate-finance-tool.herokuapp.com/"
                target="_blank"
                className="card_link"
                rel="noreferrer"
              >
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">Project</span>
                <h3 className="card__title">Check Mate Finance Tool</h3>
                <div className="card__category">
                  JAVASCRIPT, NODE.JS, EXPRESS.JS, MYSQL
                </div>

                <h4 className="card__by">Description</h4>
                <h3>
                  This application allows users to keep track of their expenses
                  and setting smart savings goals.
                </h3>
                <div className="github">
                  <a
                    href="https://github.com/wstaylor27/Check-Mate"
                    target="_blank"
                    className="card_link"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="card card--2">
              <div className="card__img"></div>
              <a
                href="https://kmwine02.github.io/project01/"
                target="_blank"
                className="card_link"
                rel="noreferrer"
              >
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">Project</span>
                <h3 className="card__title">Sip N' Show</h3>
                <span className="card__category">
                  HTML, CSS, JAVASCRIPT, REST API, BOOTSTRAP
                </span>
                <h4 className="card__by">Description</h4>
                <h3>
                  This application assists the user to find an event featuring
                  their favorite band or artist along with a local brewery to
                  visit before or after the show.
                </h3>
                <div className="github">
                  <a
                    href="https://github.com/wstaylor27/Sip-N-Show"
                    target="_blank"
                    className="card_link"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="card card--3">
              <div className="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Work-Day-Scheduler/"
                target="_blank"
                className="card_link"
                rel="noreferrer"
              >
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">Repo</span>
                <h3 className="card__title">Work Day Scheduler</h3>
                <div className="card__category">HTML, CSS, JAVASCRIPT</div>
                <h4 className="card__by">Description</h4>
                <h3>
                  This application allows users to dynamically schedule their
                  activities within their day.
                </h3>
                <div className="github">
                  <a
                    href="https://github.com/wstaylor27/Work-Day-Scheduler"
                    target="_blank"
                    className="card_link"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="card card--4">
              <div className="card__img"></div>
              <a
                href="https://powerful-ridge-40625.herokuapp.com/"
                target="_blank"
                className="card_link"
                rel="noreferrer"
              >
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">Repo</span>
                <h3 className="card__title">Workout Tracker</h3>
                <div className="card__category">
                  JAVASCRIPT, NOSQL, EXPRESS.JS
                </div>
                <h4 className="card__by">Description</h4>
                <h3>
                  This application logs all workouts with visual progress
                  representation.
                </h3>
                <div className="github">
                  <a
                    href="https://github.com/wstaylor27/Workout-Tracker-App"
                    target="_blank"
                    className="card_link"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="card card--5">
              <div className="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Randy-Passcode-Generator/"
                target="_blank"
                className="card_link"
                rel="noreferrer"
              >
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">Repo</span>
                <h3 className="card__title">Randy Passcode Generator</h3>
                <div className="card__category">HTML, CSS, JAVASCRIPT</div>
                <h4 className="card__by">Description</h4>
                <h3>
                  This application generates a strong random password for users.
                </h3>
                <div className="github">
                  <a
                    href="https://github.com/wstaylor27/Randy-Passcode-Generator"
                    target="_blank"
                    className="card_link"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="card card--6">
              <div className="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Precise-Weather-App/"
                target="_blank"
                className="card_link"
                rel="noreferrer"
              >
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">Repo</span>
                <h3 className="card__title">Weather App</h3>
                <div className="card__category">
                  HTML, CSS, JAVASCRIPT, REST API
                </div>
                <h4 className="card__by">Description</h4>
                <h3>
                  This application displays current and future weather
                  conditions around the world.
                </h3>
                <div className="github">
                  <a
                    href="https://github.com/wstaylor27/Precise-Weather-App"
                    target="_blank"
                    className="card_link"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}
