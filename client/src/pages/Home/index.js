import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

import Form from "../../components/Form";
import MealCard from "../../components/MealCard";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.currentUser) navigate("/");
    else {
      let dateMeals = [];

      props.currentUser.meals.forEach((meal) => {
        if (meal.date === props.date.date) {
          dateMeals.push(meal);
        }
      });

      setLogs(dateMeals);
    }
  }, [props.currentUser, props.date.date]);

  return (
    <div className="home">
      <Form
        date={props.date}
        setDate={props.setDate}
        logs={logs}
        setLogs={setLogs}
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      />

      <div className="daylogs">
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "breakfast") {
                return (
                  <MealCard
                    log={result}
                    logs={logs}
                    key={result._id}
                    setLogs={setLogs}
                  />
                );
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "mid-morning") {
                return (
                  <MealCard
                    log={result}
                    logs={logs}
                    key={result._id}
                    setLogs={setLogs}
                  />
                );
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "lunch") {
                return (
                  <MealCard
                    log={result}
                    logs={logs}
                    key={result._id}
                    setLogs={setLogs}
                  />
                );
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "afternoon") {
                return (
                  <MealCard
                    log={result}
                    logs={logs}
                    key={result._id}
                    setLogs={setLogs}
                  />
                );
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "dinner") {
                return (
                  <MealCard
                    log={result}
                    logs={logs}
                    key={result._id}
                    setLogs={setLogs}
                  />
                );
              }
            })
          : ""}
      </div>
    </div>
  );
}
