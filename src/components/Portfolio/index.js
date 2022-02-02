import React, { useState } from "react";
import Project from "../Project/index";

import "../../styles/style.css";
import "../../styles/reset.css";

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "check-mate",
      description: "Financial app",
      link: "https://check-mate-finance-tool.herokuapp.com/",
      repo: "https://check-mate-finance-tool.herokuapp.com/",
    },
    {
      name: "sip-n-show",
      description: "Concert and Brewery Finder",
      link: "https://kmwine02.github.io/project01/",
      repo: "https://check-mate-finance-tool.herokuapp.com/",
    },
    {
      name: "work-day-scheduler",
      description: "Day Scheduler",
      link: "https://wstaylor27.github.io/Work-Day-Scheduler",
      repo: "https://check-mate-finance-tool.herokuapp.com/",
    },
    {
      name: "code-quizzer",
      description: "Knowledge Quiz",
      link: "https://wstaylor27.github.io/Code-Quizzer/",
      repo: "https://check-mate-finance-tool.herokuapp.com/",
    },
    {
      name: "randy-passcode-generator",
      description: "Password Generator",
      link: "https://wstaylor27.github.io/Randy-Passcode-Generator/",
      repo: "https://check-mate-finance-tool.herokuapp.com/",
    },
    {
      name: "precise-weather-app",
      description: "Weather Application",
      link: "https://wstaylor27.github.io/Precise-Weather-App/",
      repo: "https://check-mate-finance-tool.herokuapp.com/",
    },
  ]);

  return (
    <div>
      <main>
        {/* Projects Area */}
        <section id="projects" className="projects">
          <aside>
            <h4>Projects</h4>
          </aside>
          <div className="cards">
            {projects.map((project, idx) => (
              <Project project={project} key={"project" + idx} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
