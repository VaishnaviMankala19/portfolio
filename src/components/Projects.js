import React from "react";
import "./About.css";
import CardPro from "./CardPro";
import "./Projects.css";

export default function About() {
  return (
    <>
      <div className="about">PROJECTS</div>
      <CardPro
        pcontent="This App has three functionalities one is basic calculator other is a temperature convertor and BMI generator this is bulit using html , css and javascript"
        pname="Calculator"
        pimage="../../images/calc.png"
        purl="https://vaishnavimankala19.github.io/CaluculateMe/"
      />
      <CardPro
        pcontent="This App renders an Analog clock.It is built using html css and javascript "
        pname="Clock"
        pimage="../../images/analog.png"
        purl="https://vaishnavimankala19.github.io/Analogclock/"
      />
      <CardPro
        pcontent="This is an Todo-App built using reactjs"
        pname="Todo-List"
        pimage="../../images/todo.png"
        purl="https://delightful-pasca-b0c84f.netlify.app/"
      />
      <CardPro
        pcontent="This is an notes-App built using reactjs"
        pname="Note-App"
        pimage="../../images/notes.png"
        purl="https://zn54v3.csb.app/"
      />
    </>
  );
}
