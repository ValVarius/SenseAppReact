import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

import Form from "../../components/Form";
import MealCard from "../../components/MealCard";

export default function Home(props) {
  const [logs, setLogs] = useState([]);
  const [retrieved, setRetrieved] = useState(true);


  useEffect(() => {
    
    let dateMeals = []
    props.currentUser.meals.forEach(meal => {
      if (meal.date === props.date.date) {
        dateMeals.push(meal)
      }
    });
    
    setLogs(dateMeals)
  },[props.currentUser || props.date.date]);

  return (
    <div className="home">
      {retrieved ? (
        <Form date={props.date} setDate={props.setDate} logs={logs} setRetrieved={setRetrieved} currentUser={props.currentUser} setCurrentUser ={props.setCurrentUser} />
      ) : (
        ""
      )}
      <div className="daylogs">
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "breakfast") {
                return <MealCard log={result} key={result._id} setRetrieved = {setRetrieved} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "mid-morning") {
                return <MealCard log={result} key={result._id} setRetrieved = {setRetrieved} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "lunch") {
                return <MealCard log={result} key={result._id} setRetrieved = {setRetrieved} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "afternoon") {
                return <MealCard log={result} key={result._id} setRetrieved = {setRetrieved} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "dinner") {
                return <MealCard log={result} key={result._id} setRetrieved = {setRetrieved} />;
              }
            })
          : ""}
      </div>
    </div>
  );
}
