import React from "react";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Background from "./Components/Background";
import Certifications from "./Components/Certifications";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollSignal from "./Components/ScrollSignal";

const App = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollSignal />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Intro />
        <Projects />
        <Skills />
        <Background />
        <Certifications />
      </main>
      <Footer />
    </>
  );
};

export default App;
