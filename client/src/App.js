import Home from "./pages/Home";
import Login from "./pages/Login";
import PdfPage from "./pages/PdfPage";
import FoodPanel from "./components/FoodPanel";
import Calendar from "./components/Calendar";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";

function App() {
  // This should be passed to the form and calendar component
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
    date: "",
  });

  useEffect(() => {
    let d = new Date();
    setDate({
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      date: d.getMonth() + 1 + "|" + d.getDate() + "|" + d.getFullYear(),
    });
  }, []);
  return (
    <div id="app">

      <Navbar date={date} setDate={setDate} />
      {date.date ? <Home date={date} setDate={setDate} /> : null}
      {/* <Login/> */}
      {/* {date.date ? <Calendar date={date} setDate={setDate}/> : ""} */}
      {/* <FoodPanel/> */}
      {/* <PdfPage/> */}
      {/* <img src="./public/icons8-down-arrow-flaticons-lineal-color-96.png"></img> */}
    </div>
  );
}

export default App;
