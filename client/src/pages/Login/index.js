import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    first: "",
    last: "",
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
  const handleSignUpChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;

    setNewUser((prevState) => ({
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
  const signup = () => {
    // THIS SHOULD ALSO PUT THE MANU INTO THE USER DB???
    API.createUser(newUser).then((res) => {
      props.setCurrentUser(res.data);
      setNewUser({
        username: "",
        email: "",
        first: "",
        last: "",
        password: "",
      });
      navigate("/Home");
    });
  };
  const login = (event) => {
    API.login(credentials).then((res) => {
      if (res.data === "incorrect password") {
        setIncorrect("Incorrect Password");
        setNotfound("");
      } else if (res.data === "no user found") {
        setNotfound("User Not Found");
        setIncorrect("");
      } else if (res.data._id) {
        setIncorrect("");
        setNotfound("");

        props.setCurrentUser(res.data);
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
          <button className="control" type="button" cursor='pointer' onClick={login}>
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
            placeholder="First Name"
            value={newUser.first}
            name="first"
            onChange={handleSignUpChange}
          />
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Last Name"
            value={newUser.last}
            name="last"
            onChange={handleSignUpChange}
          />
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Email Address"
            value={newUser.email}
            name="email"
            onChange={handleSignUpChange}
          />
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Username"
            value={newUser.username}
            name="username"
            onChange={handleSignUpChange}
          />
          <div className="password">
            <input
              spellCheck="false"
              className="control"
              id="password"
              type="password"
              placeholder="Password"
              value={newUser.password}
              name="password"
              onChange={handleSignUpChange}
            />
            <button
              className="toggle"
              type="button"
              onClick={togglePassword}
            ></button>
          </div>
          <button className="control" type="button" cursor='pointer'onClick={signup}>
            SIGN UP
          </button>
        </form>
      </div>
    );
  }
}
