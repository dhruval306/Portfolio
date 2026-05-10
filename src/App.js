import React from "react";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Background from "./Components/Background";
import Certifications from "./Components/Certifications";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
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
