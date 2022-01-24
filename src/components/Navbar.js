import React from "react";

import "../styles/style.css";
import "../styles/reset.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
