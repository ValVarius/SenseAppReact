import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [registered, setRegistered] = useState(true);
  const [incorrect, setIncorrect] = useState("");
  const [notfound, setNotfound] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const register = () => {
    setRegistered(!registered);
  };

  const togglePassword = (event) => {
    event.target.classList =
      event.target.classList == "toggle showing" ? "toggle" : "toggle showing";
    event.target.parentElement.children[0].type =
      event.target.parentElement.children[0].type === "password"
        ? "text"
        : "password";
  };
  const signup = (event) => {
    console.log("LOGIN:");
    console.log(credentials.username);
    console.log(credentials.password);

    API.createUser(credentials).then((res) => {
      console.log(res);
      setCredentials({
        username: "",
        password: "",
      });
    });
  };
  const login = (event) => {
    console.log("LOGIN:");
    console.log(credentials.username);
    console.log(credentials.password);
    console.log(credentials);

    API.login(credentials).then((res) => {
      console.log(res.data);
      if (res.data === "incorrect password") {
        setIncorrect("Incorrect Password");
        setNotfound("")
      } else if (res.data === "no user found") {
        setNotfound("User Not Found")
        setIncorrect("");

      }else if (res.data._id) {
        setIncorrect("");
        setNotfound("")
        
        props.setCurrentUser(res.data)
        setCredentials({
          username: "",
          password: "",
        });
        navigate("/Home");
      }
    });
  };
  if (registered) {
    return (
      <div className="login-card">
        <button className="control switch" type="button" onClick={register}>
          Sign Up
        </button>
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form">
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Username"
            value={credentials.username}
            name="username"
            onChange={handleChange}
          />
          <div className="warning">{notfound}</div>
          <div className="password">
            <input
              spellCheck="false"
              className="control"
              id="password"
              type="password"
              placeholder="Password"
              value={credentials.password}
              name="password"
              onChange={handleChange}
            />
            <button
              className="toggle"
              type="button"
              onClick={togglePassword}
            ></button>
            <div className="warning">{incorrect}</div>
          </div>
          <button className="control" type="button" onClick={login}>
            LOGIN
          </button>
        </form>
      </div>
    );
  } else {
    return (
      // SIGN UP
      <div className="login-card">
        <button className="control switch" type="button" onClick={register}>
          Login
        </button>
        <h2>Sign Up</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form">
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Username"
            value={credentials.username}
            name="username"
            onChange={handleChange}
          />
          <div className="password">
            <input
              spellCheck="false"
              className="control"
              id="password"
              type="password"
              placeholder="Password"
              value={credentials.password}
              name="password"
              onChange={handleChange}
            />
            <button
              className="toggle"
              type="button"
              onClick={togglePassword}
            ></button>
          </div>
          <button className="control" type="button" onClick={signup}>
            SIGN UP
          </button>
        </form>
      </div>
    );
  }
}
