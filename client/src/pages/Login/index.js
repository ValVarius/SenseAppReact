import React, { useState, useEffect } from "react";
import "./style.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePassword = (event) => {
    event.target.classList =
      event.target.classList == "toggle showing" ? "toggle" : "toggle showing";
    event.target.parentElement.children[0].type =
      event.target.parentElement.children[0].type === "password"
        ? "text"
        : "password";
  };
  const login = (event) => {
    console.log("LOGIN:");
    console.log(credentials.name);
    console.log(credentials.password);
    setCredentials({
      name: "",
      password: "",
    });
  };
  return (
    <div className="login-card">
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form className="login-form">
        <input
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Username"
          value= {credentials.name}
          name="name"
          onChange={handleChange}
        />
        <div className="password">
          <input
            spellCheck="false"
            className="control"
            id="password"
            type="password"
            placeholder="Password"
            value ={credentials.password}
            name="password"
            onChange={handleChange}
          />
          <button
            className="toggle"
            type="button"
            onClick={togglePassword}
          ></button>
        </div>
        <button className="control" type="button" onClick={login}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
