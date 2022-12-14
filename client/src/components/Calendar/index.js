import React, { useState, useEffect } from "react";
import API from "../../utils/API";
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

  const handleChange =  (event) => {
    const { name, value } = event.target;
    props.setDate({
      ...props.date,
      [name]: value,
    })
    props.setDate({
      ...props.date,
      [name]: value,
      date: event.target.parentElement.children[1].value + "|" + event.target.parentElement.children[0].value + "|" + event.target.parentElement.children[2].value,
    })
  }

  // const searchDay = (event) => {
  //   event.preventDefault();
  //   // console.log(props.date);
  //   // console.log("Day: ", event.target.parentElement.children[0].value);
  //   // console.log("Month: ", event.target.parentElement.children[1].value);
  //   // console.log("Year: ", event.target.parentElement.children[2].value);
  //   // API.getMealsbyDay(props.date.date).then(res => {
  //   //   console.log(res.data);
  //   // });
  //   props.setDate({
  //     day: event.target.parentElement.children[0].value,
  //     month:  event.target.parentElement.children[1].value,
  //     year: event.target.parentElement.children[2].value,
  //     date: event.target.parentElement.children[1].value + "|" + event.target.parentElement.children[0].value + "|" + event.target.parentElement.children[2].value,
  //   });
  // }
  return (
    <div className="select-date float-right" >
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
        value={props.date.month}
        onChange={handleChange}
      >
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <select
        name="year"
        id="select-year"
        value={props.date.year}
        onChange={handleChange}
      >
        {yearOptions}
      </select>
      {/* <button
        className="btn btn-outline-danger"
        id="daysearch"
        onClick={searchDay}
      >
        Search
      </button> */}
    </div>
  );
}
