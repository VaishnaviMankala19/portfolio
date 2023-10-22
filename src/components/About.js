import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">ABOUT</div>
      <div className="wrapper">
        <div className="static-txt">I'm</div>
        <ul className="dynamic-txts">
          <li>
            <span>Mankala Vaishnavi</span>
          </li>
          <li>
            <span>Python Enthusiast</span>
          </li>
          <li>
            <span>Full Stack Aspirer</span>
          </li>
          <li>
            <span>Competitive Programmer</span>
          </li>
        </ul>
      </div>
      <div className="card1">
        I am currently pursuing Btech Computer Science in Vignan's Institute Of
        Information Technology. passionate about Competitive programming ,
        python and web designing
      </div>
      <div className="button1">
        <a href="https://drive.google.com/file/d/1MbLrskqt_bfal4cwxbCaQ7RMMPH6voF1/view?usp=drive_link">
          RESUME
        </a>
      </div>
      {/* <Rbutton /> */}
    </>
  );
}
