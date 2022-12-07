import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

import Form from "../../components/Form";
import MealCard from "../../components/MealCard";

export default function Home(props) {
  const [logs, setLogs] = useState([]);
  const [retrieved, setRetrieved] = useState(false);

  // THIS SHOULD HAPPEN EVERYTIME DATE CHANGES?
  useEffect(() => {
    // api call to retrieve todays logs.
    API.getMealsbyDay(props.date.date).then((res) => {
      console.log(res);
      setLogs(res.data);
      setRetrieved(true);
    });
  // }, [props.date.date]);
  }, [retrieved==false || props.date.date]);

  return (
    <div className="home">
      {retrieved ? (
        <Form date={props.date} setDate={props.setDate} logs={logs} setRetrieved={setRetrieved} />
      ) : (
        ""
      )}
      <div className="daylogs">
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "breakfast") {
                return <MealCard log={result} key={result._id} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "mid-morning") {
                return <MealCard log={result} key={result._id} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "lunch") {
                return <MealCard log={result} key={result._id} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "afternoon") {
                return <MealCard log={result} key={result._id} />;
              }
            })
          : ""}
        {/* BREAKFAST */}
        {logs
          ? logs.map((result) => {
              if (result.title == "dinner") {
                return <MealCard log={result} key={result._id} />;
              }
            })
          : ""}
      </div>
    </div>
  );
}
