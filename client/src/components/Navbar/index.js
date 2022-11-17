import React from "react";
import "./style.css";
import Calendar from "../Calendar";


export default function Navbar() {
 
  return (
    <nav className="navbar navbar-expand" aria-label="">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img
            src="https://cellsciencesystems.com/images/cell-science-systems-logo.png"
            alt="cell science systems logo"
            id="navbarlogo"
          />
        </a>
        <Calendar/>
        <div className="collapse navbar-collapse" id="navbarNav">
          
        </div>
        <span className="navbar-text" id="date"></span>
      </div>
    </nav>
  );
}
