import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Profiles from "./components/Profiles";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <section id="aboutme" className="section"></section>
      <About />
      <section id="myskills" className="section"></section>
      <Skills />
      <section id="prof" className="section"></section>
      <Profiles />
      <section id="pros" className="section"></section>
      <Projects />
      <section id="contacts" className="section"></section>
      <Contact />
    </>
  );
}
