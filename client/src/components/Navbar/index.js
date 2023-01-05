import React from "react";
import "./style.css";
import Calendar from "../Calendar";
import { useNavigate } from "react-router-dom";
import API from "../../utils/API";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = (event) => {
    API.logout().then((res) => {
      props.setCurrentUser(false);
      navigate("/");
    });
  };
  const toStats = (event) => {
    event.preventDefault();
    navigate("/Stats");
  };
  const goHome = (event) => {
    event.preventDefault();
    navigate("/Home");
  };
  return (
    <nav className="navbar navbar-expand" aria-label="">
      <div className="container-fluid">
        {/* <a href="/Home" className="navbar-brand"> */}
        <img
          src="https://cellsciencesystems.com/images/cell-science-systems-logo.png"
          alt="cell science systems logo"
          id="navbarlogo"
          onClick={goHome}
        />
        {/* </a> */}

        {props.currentUser ? (
          <>
            <button
              className="btn navbtn"
              id="logoutbutton"
              type="button"
              onClick={handleLogoutClick}
            >
              LogOut
            </button>
            {location.pathname === "/Home" ? (
              <button
                type="button"
                className="btn btn-light navbtn"
                id="statslink"
                onClick={toStats}
              >
                <img
                  src={require("../../public/stats.png")}
                  alt="Stats Logo"
                  id="statlogo"
                />
                Statistics
              </button>
            ) : (
              ""
            )}

            {props.date.date && location.pathname === "/Home" ? (
              <Calendar date={props.date} setDate={props.setDate} />
            ) : (
              <button
                className="btn navbtn"
                id="backbutton"
                type="button"
                onClick={goHome}
              >
                Back
              </button>
            )}
          </>
        ) : null}
      </div>
    </nav>
  );
}
