import React from "react";
import "./style.css";
import Calendar from "../Calendar";

export default function Navbar(props) {
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
        { props.date.day ? <Calendar date={props.date} setDate={props.setDate} /> : null }

        {/* <Calendar date={props.date} setDate={props.setDate}/> */}
      </div>
    </nav>
  );
}
