import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description } = project;

  //   src={require(`../../assets/projects/${name}.jpg`)}

  return (
    <div className="card" key={name}>
      <img
        src={require(`../../images/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="card__img "
      />
      <a href={link}>
        <div className="card__img--hover"></div>
      </a>

      <div className="card__info">
        <span className="card__category">Project</span>
        <h3 className="card__title">
          <span className="card__by ">
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
