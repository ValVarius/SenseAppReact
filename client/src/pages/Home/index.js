import React, { useState, useEffect } from "react";
import "./style.css";

import Form from "../../components/Form";

export default function Home(props) {
  
  return (
    <div>
      <Form date={props.date} setDate={props.setDate}/>
    </div>
  );
}
