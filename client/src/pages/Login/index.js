import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";


export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [registered, setRegistered] = useState(true);


  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const register = () => {
    setRegistered(!registered)
  }

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
  if ( registered) {
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
             value= {credentials.username}
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
  else {
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
              value= {credentials.username}
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
              SIGN UP
            </button>
          </form>
        </div>
    )
  }
 
 
}
