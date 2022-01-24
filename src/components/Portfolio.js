import React from "react";

import "../styles/style.css";
import "../styles/reset.css";

export function Portfolio() {
  return (
    <div>
      <div class="banner"></div>
      <main>
        {/* About Me Area */}
        <section id="about-me" class="about-me">
          <aside>
            <h4>About Me</h4>
          </aside>

          <article class="text">
            <p>
              Greetings world! My name is Wesley Taylor, but most call me "Wes".
              I was born and raised in the "Queen City", also known as,
              Charlotte, North Carolina. As a youth, I was extremely inquisitive
              of the world around me. Everyday was an adventure to explore new
              experiences. I was also an amateur artist. I had a passion to
              create visual and audio art. Fast-forward to present day, I've
              traveled to over 20 countries! I'm also an inventor, entrepreneur,
              commercial drone pilot, and a music producer.
            </p>

            <p>
              So, how did I become a software developer? Better question -- why?
              Two years ago, I realized my full-time job at the time needed a
              change. The hours were good, however, the pay was insufficient. My
              day-to-day operation didn't allow me to be creative; there was no
              spark, no passion. I desired change and I wasn't interested in a
              career of mediocrity. I was first introduced to coding through
              Udemy. It was a site that provided courses that covered almost
              every computer-based skill. I dabbled in JavaScript, HTML, CSS and
              Python 3. Instantly, my passion was rekindled. My purpose to
              create, was now more evident than ever.
            </p>
          </article>
        </section>

        {/* Projects Area */}
        <section id="projects" class="projects">
          <aside>
            <h4>Projects</h4>
          </aside>
          <section class="cards">
            <article class="card card--1">
              <div class="card__img"></div>
              <a
                href="https://check-mate-finance-tool.herokuapp.com/"
                target="_blank"
                class="card_link"
                rel="noreferrer"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">Project</span>
                <h3 class="card__title">Check Mate Finance Tool</h3>
                <span class="card__by">
                  by
                  <a href="#" class="card__author" title="author">
                    Collaboration
                  </a>
                </span>
              </div>
            </article>

            <article class="card card--2">
              <div class="card__img"></div>
              <a
                href="https://kmwine02.github.io/project01/"
                target="_blank"
                class="card_link"
                rel="noreferrer"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">Project</span>
                <h3 class="card__title">Sip N' Show</h3>
                <span class="card__by">
                  by
                  <a href="#" class="card__author" title="author">
                    Collaboration
                  </a>
                </span>
              </div>
            </article>

            <article class="card card--3">
              <div class="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Work-Day-Scheduler/"
                target="_blank"
                class="card_link"
                rel="noreferrer"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">Repo</span>
                <h3 class="card__title">Work Day Scheduler</h3>
                <span class="card__by">
                  by
                  <a href="#" class="card__author" title="author">
                    Wesley Taylor
                  </a>
                </span>
              </div>
            </article>

            <article class="card card--4">
              <div class="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Code-Quizzer/"
                target="_blank"
                class="card_link"
                rel="noreferrer"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">Repo</span>
                <h3 class="card__title">Code Quizzer</h3>
                <span class="card__by">
                  by
                  <a href="#" class="card__author" title="author">
                    Wesley Taylor
                  </a>
                </span>
              </div>
            </article>

            <article class="card card--5">
              <div class="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Randy-Passcode-Generator/"
                target="_blank"
                class="card_link"
                rel="noreferrer"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">Repo</span>
                <h3 class="card__title">Randy Passcode Generator</h3>
                <span class="card__by">
                  by
                  <a href="#" class="card__author" title="author">
                    Wesley Taylor
                  </a>
                </span>
              </div>
            </article>

            <article class="card card--6">
              <div class="card__img"></div>
              <a
                href="https://wstaylor27.github.io/Precise-Weather-App/"
                target="_blank"
                class="card_link"
                rel="noreferrer"
              >
                <div class="card__img--hover"></div>
              </a>
              <div class="card__info">
                <span class="card__category">Repo</span>
                <h3 class="card__title">Weather App</h3>
                <span class="card__by">
                  by
                  <a href="#" class="card__author" title="author">
                    Wesley Taylor
                  </a>
                </span>
              </div>
            </article>
          </section>
        </section>

        {/* Contact Area */}
        <section id="contact" class="contact">
          <aside>
            <h4>Contact</h4>
          </aside>
          <ul>
            <li>📱 (704) 911-0024</li>
            <li>
              📫 <a href="mailto:wstaylor27@gmail.com">wstaylor27@gmail.com</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                nbsp;
              </svg>
              <a
                href="https://github.com/wstaylor27"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <a
                href="https://www.linkedin.com/in/wesley-taylor-9879b593/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
