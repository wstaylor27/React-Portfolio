import React, { useState } from "react";
import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
