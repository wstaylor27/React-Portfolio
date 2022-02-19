import React from "react";

function Resume() {
  return (
    <section>
      <div className="row">
        <div className="column">
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="column">
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>

      <p>
        Download my{" "}
        <a href="https://drive.google.com/file/d/10tAyl2Z6VWLtLVKyN9LJwF9CKYZbxkRx/view?usp=sharing">
          resume
        </a>
      </p>
    </section>
  );
}

export default Resume;
