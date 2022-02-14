import React from "react";

import "../../styles/style.css";
import "../../styles/reset.css";

export default function About() {
  return (
    <div id="about" className="about">
      <aside>
        <h4>About Me</h4>
      </aside>

      <article className="text">
        <span>
          <img
            src={require("../../images/portfolio_profile pic.jpg")}
            alt="profile pic"
            className="image--cover"
          />
        </span>
        <p>
          Greetings world! My name is Wesley Taylor, but most call me "Wes". I
          was born and raised in the "Queen City", also known as, Charlotte,
          North Carolina. As a youth, I was extremely inquisitive of the world
          around me. Everyday was an adventure to explore new experiences. I was
          also an amateur artist. I had a passion to create visual and audio
          art. Fast-forward to present day, I've traveled to over 20 countries!
          I'm also an inventor, entrepreneur, commercial drone pilot, and a
          music producer.
        </p>

        <p>
          So, how did I become a software developer? Better question -- why? Two
          years ago, I realized my full-time job at the time needed a change.
          The hours were good, however, the pay was insufficient. My day-to-day
          operation didn't allow me to be creative; there was no spark, no
          passion. I desired change and I wasn't interested in a career of
          mediocrity. I was first introduced to coding through Udemy. It was a
          site that provided courses that covered almost every computer-based
          skill. I dabbled in JavaScript, HTML, CSS and Python 3. Instantly, my
          passion was rekindled. My purpose to create, was now more evident than
          ever.
        </p>
      </article>
    </div>
  );
}
