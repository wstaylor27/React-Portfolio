import React from "react";
// Here we are importing a CSS file as a dependency
import "../../styles/style.css";
import "../../styles/reset.css";

export default function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/wstaylor27",
    },
    {
      name: "fab fa-linkdedin",
      link: "https://www.linkedin.com/",
    },
  ];
  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
      <h3>Website is property of WND Enterprises, LLC</h3>
    </footer>
  );
}
