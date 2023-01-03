import Home from "./pages/Home";
import Login from "./pages/Login";
import StatsPage from "./pages/StatsPage";
// import PdfPage from "./pages/PdfPage";
// import FoodPanel from "./components/FoodPanel";
// import Calendar from "./components/Calendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import API from "./utils/API";

function App() {
  // This should be passed to the form and calendar component
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
    date: "",
  });

  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    API.readSessions().then((res) => {
      if (res.data.user) {
        setCurrentUser(res.data.user);
      }
    });
    let d = new Date();
    setDate({
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      date: d.getMonth() + 1 + "|" + d.getDate() + "|" + d.getFullYear(),
    });
  }, []);
  return (
    <BrowserRouter>
      <div id="app">
        <Navbar
          date={date}
          setDate={setDate}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          ></Route>
          <Route
            exact
            path="/Home"
            element={
              date.date ? (
                <Home
                  date={date}
                  setDate={setDate}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              ) : null
            }
          ></Route>
          <Route
            exact
            path="/Stats"
            element={
              <StatsPage
                date={date}
                setDate={setDate}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          ></Route>
        </Routes>
        {/* {date.date ? <Calendar date={date} setDate={setDate}/> : ""} */}
        {/* <FoodPanel/> */}
        {/* <PdfPage/> */}
        {/* <img src="./public/icons8-down-arrow-flaticons-lineal-color-96.png"></img> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
