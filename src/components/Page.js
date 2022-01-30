import React from "react";
import PageContent from "../PageContent";
import About from "./pages/About";
import Portfolio from "../Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { capitalizeFirstLetter } from "../utils/helpers";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
