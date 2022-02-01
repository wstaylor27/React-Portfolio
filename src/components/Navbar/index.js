import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

import "../../styles/style.css";
import "../../styles/reset.css";

function Navbar(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <ul className="flex-row nav nav-tabs">
        {pages.map((Page) => (
          <li
            className={`mx-5 nav-item ${
              currentPage.name === Page.name && "navActive"
            }`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
