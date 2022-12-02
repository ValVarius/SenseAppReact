import React, { useState, useEffect } from "react";
import "./style.css";
// import $ from "jquery";

export default function Calendar(props) {
  const [daysOptions, setdaysOptions] = useState([]);
  const [yearOptions, setyearOptions] = useState([]);
  useEffect(() => {
    setyearOptions(setYears());
    setdaysOptions(setDays());
  }, []);

  // make sure the number of days correspond with the selected month
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const setDays = () => {
    let display = [];
    for (let i = 1; i <= daysInMonth[props.date.month - 1]; i++) {
      display.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return display;
  };
  const setYears = () => {
    let display = [];
    for (let i = 0; i < 3; i++) {
      display.push(
        <option key={props.date.year - i} value={props.date.year - i}>
          {props.date.year - i}
        </option>
      );
    }

    return display;
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setDate({
      ...props.date,
      [name]: value,
    });
  };

  return (
    <div className="select-date float-right" onChange={handleChange}>
      <select
        name="day"
        id="select-day"
        value={props.date.day}
        onChange={handleChange}
      >
        {daysOptions}
      </select>
      <select
        name="month"
        id="select-month"
        value={props.date.month - 1}
        onChange={handleChange}
      >
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
      <select name="year" id="select-year">{yearOptions}</select>
      <button className="btn btn-outline-danger" id="daysearch">
        Search
      </button>
    </div>
  );
}
