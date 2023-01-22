import React, { useState, useEffect } from "react";
// import API from "../../utils/API";
import "./style.css";

export default function StatsCalendar(props) {
  const [future, setFuture] = useState(false);
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
    let day = event.target.parentElement.children[1].value;
    let month = event.target.parentElement.children[0].value;
    let year = event.target.parentElement.children[2].value;
    // console.log(props.date.day);
    // console.log(props.date.month);
    // console.log(props.date.year);
    let toofar = false;
    if (year == props.date.year) {
      if (month > props.date.month) {
        setFuture(true);
        toofar = true;
      } else if (month == props.date.month) {
        if (day > props.date.day) {
          setFuture(true);
          toofar = true;
        }
      }
    }
    if (!toofar) {
      setFuture(false);
      props.setBeginning(
        (
          month +
          "|" +
          day +
          "|" +
          year
        ).split("|")
      );
    }
  };

  return (
    <div className="select-beginning ">
      <select
        name="month"
        id="beginning-month"
        value={props.beginning[0]}
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
        name="day"
        id="beginning-day"
        value={props.beginning[1]}
        onChange={handleChange}
      >
        {daysOptions}
      </select>
      <select
        name="year"
        id="beginning-year"
        value={props.beginning[2]}
        onChange={handleChange}
      >
        {yearOptions}
      </select>
 {future ? <div id="futureDateWarning">Starting Date Cannot be in the future</div> : "Starting Date"}
    </div>
  );
}
