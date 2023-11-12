import React from "react";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications";
import Navbar from "./Components/Navabar";

const App = () => {
  return <>
    <Navbar />
    <Intro />
    <Projects />
    <Skills />
    <Certifications />
    </>
}

export default App
