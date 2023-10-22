import React from "react";
import "./About.css";
import "./Projects.css";
export default function Card(props) {
  return (
    <>
      <div className="pcard">
        <img className="pavatar" src={props.pimage} alt="img" />
        <div className="pheading">{props.pname}</div>
        <div className="pcontainer">{props.pcontent}</div>
        <a href={props.purl}>
          <button className="pbutton2">View</button>
        </a>
      </div>
    </>
  );
}
