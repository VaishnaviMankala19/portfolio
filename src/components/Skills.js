import React from "react";
import "./About.css";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <div className="about">SKILLS</div>
      <div id="skill" className="overflow-auto">
        <li>
          <h3 className="hh">html</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">css</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">javascript</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">reactjs</h3>
          <span className="bar">
            <span className="reactjs"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">node</h3>
          <span className="bar">
            <span className="node"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">mongodb</h3>
          <span className="bar">
            <span className="mongodb"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">python</h3>
          <span className="bar">
            <span className="python"></span>
          </span>
        </li>
        <li>
          <h3 className="hh">cpp</h3>
          <span className="bar">
            <span className="cpp"></span>
          </span>
        </li>
      </div>
    </>
  );
}
