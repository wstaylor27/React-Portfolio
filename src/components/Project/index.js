import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  //   src={require(`../../assets/projects/${name}.jpg`)}

  return (
    <div className="cards card" key={name}>
      <img
        src={require(`../../images/${image}`)}
        alt={removeHyphensAndCapitalize(name)}
        className="card__img"
      />
      <div className="card__info">
        <span class="card__category">Project</span>
        <h3 className="card__title">
          <span className="card__by">
            <a href={link}>{removeHyphensAndCapitalize(name)}</a>{" "}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
