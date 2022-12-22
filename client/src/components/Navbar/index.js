import React from "react";
import "./style.css";
import Calendar from "../Calendar";
import { useNavigate } from "react-router-dom";
import API from "../../utils/API";

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleLogoutClick = (event) => {
    API.logout().then((res) => {
      props.setCurrentUser(false);
      navigate("/");
    });
  };
  return (
    <nav className="navbar navbar-expand" aria-label="">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img
            src="https://cellsciencesystems.com/images/cell-science-systems-logo.png"
            alt="cell science systems logo"
            id="navbarlogo"
          />
        </a>
        {props.currentUser ? (
          <button
            className="control switch"
            id="logoutbutton"
            type="button"
            onClick={handleLogoutClick}
          >
            Log Out
          </button>
        ) : null}

        {props.date.date ? (
          <Calendar date={props.date} setDate={props.setDate} />
        ) : null}
      </div>
    </nav>
  );
}
