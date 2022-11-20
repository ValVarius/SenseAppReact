import Home from "./pages/Home";
import PdfPage from "./pages/PdfPage";
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
    <div>
      <Navbar date={date} setDate={setDate} />
      {date.day ? <Home date={date} setDate={setDate} /> : null}

      {/* <PdfPage/> */}

      {/* <Home date={date} setDate={setDate} /> */}
    </div>
  );
}

export default App;
