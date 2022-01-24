import React from "react";
import Navbar from "./Navbar";
// Here we are importing a CSS file as a dependency
import "../styles/style.css";
import "../styles/reset.css";

export function Header() {
  return (
    <header>
      <h1>Wesley Taylor : Interactive Portfolio</h1>
      <p>Pushing the boundaries of software development.</p>
      <Navbar />
    </header>
  );
}
