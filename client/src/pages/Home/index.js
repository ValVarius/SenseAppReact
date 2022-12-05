import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

import Form from "../../components/Form";

export default function Home(props) {

  const [logs, setLogs] = useState([]);
  const [retrieved, setRetrieved] = useState(false);


  useEffect(() => {
    // api call to retrieve todays logs.
    API.getMealsbyDay(props.date.date).then(res => {
      setLogs(res.data)
      setRetrieved(true)
    });
  }, []);
  
  return (
    <div>
      {/* {retrieved ? <Form date={props.date} setDate={props.setDate} logs={logs}/>: ""} */}
     <Form date={props.date} setDate={props.setDate} />
    </div>
  );
}
