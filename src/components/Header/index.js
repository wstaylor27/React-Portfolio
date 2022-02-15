import React from "react";

// Here we are importing a CSS file as a dependency
import "../../styles/style.css";
import "../../styles/reset.css";

export default function Header(props) {
  return (
    <div>
      <header>
        <h1>Wesley Taylor : Interactive Portfolio</h1>
        <p>
          <em>Pushing the boundaries of software development.</em>
        </p>
        {props.children}
      </header>
      <div class="banner"></div>
    </div>
  );
}
