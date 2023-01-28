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
  }, [props.beginning]);

  // make sure the number of days correspond with the selected month
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const setDays = () => {
    let display = [];
    for (let i = 1; i <= daysInMonth[props.beginning[0] - 1]; i++) {
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

  const searchWeek = (event) => {
    if (props.date.day > 7) {
      let day = props.date.day - 7;
      props.setBeginning(
        (props.date.month + "|" + day + "|" + props.date.year).split("|")
      );
    } else {
      if (props.date.month == 1) {
        let day = 31 - props.date.day;
        props.setBeginning((12 + "|" + day + "|" + props.date.year).split("|"));
      } else {
        // month -- if month > 1 else month =12 year--

        let day = daysInMonth[props.date.month - 2] - props.date.day;
        props.setBeginning(
          (props.date.month - 1 + "|" + day + "|" + props.date.year).split("|")
        );
      }
    }
  };
  const searchMonth = (event) => {
    if (props.date.month == 1) {
      props.setBeginning(
        (12 + "|" + props.date.day + "|" + (props.date.year-1)).split("|")
      );
    } else {
      let day = props.date.day < 28 ? props.date.day : 28;
      let month = props.date.month--;
      props.setBeginning(
        (month + "|" + day + "|" + props.date.year).split("|")
      );
    }
  };
  const searchYear = (event) => {
    props.setBeginning(
      (props.date.month + "|" + props.date.day + "|" + (props.date.year-1)).split("|")
    );
  }
  const handleChange = (event) => {
    let year = event.target.parentElement.children[3].value;
    let month = event.target.parentElement.children[1].value;
    let day = event.target.parentElement.children[2].value;

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
      props.setBeginning((month + "|" + day + "|" + year).split("|"));
    }
  };

  return (
    <div className="select-beginning ">
      <div id="lastcontainer">
        <button
          className="btn timesearch "
          id="weeksearch"
          onClick={searchWeek}
        >
          Last Week
        </button>
        <button
          className="btn timesearch "
          id="monthsearch"
          onClick={searchMonth}
        >
          Last Month
        </button>
        <button className="btn timesearch " id="yearsearch" onClick={searchYear}>
          Last Year 
        </button>
      </div>

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
      {future ? (
        <div id="futureDateWarning">Starting Date Cannot Be In The Future</div>
      ) : (
        "Select A Specific Starting Date"
      )}
    </div>
  );
}
