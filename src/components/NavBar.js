import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light" className="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#aboutme">
              About
            </a>
            <a class="nav-link" href="#myskills">
              Skills
            </a>
            <a class="nav-link" href="#prof">
              Profiles
            </a>
            <a class="nav-link" href="#pros">
              Projects
            </a>
            <a class="nav-link" href="#contacts">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
