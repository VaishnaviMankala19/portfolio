import React from "react";
import "./About.css";
import "./Profiles.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img className="avatar" src={props.image} alt="img" />
        <div className="container">
          <p>
            <span>Highest Rating:</span>
            {props.rating}
            <br />
            <span> Problems:</span>
            {props.problems}
          </p>
        </div>
        <a href={props.url}>
          <button className="button2">View</button>
        </a>
      </div>
    </>
  );
}
