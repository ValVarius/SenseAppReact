import React, { useState, useEffect } from "react";
import "./style.css";
import $ from "jquery";

export default function Calendar(props) {
  useEffect(() => {
    
    setDays();
    setYears();
    // setDate();
    // setYears(5); // set the next five years in dropdown

    // $("#select-month").change(function () {
    //   let monthIndex = $("#select-month").val();
    //   setDays(monthIndex);
    // });

    

    

    
  }, []);

      // make sure the number of days correspond with the selected month
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const  setDays = () => {
    var optionCount = $("#select-day option").length,
      daysCount = daysInMonth[props.date.month-1];

    if (optionCount < daysCount) {
      for (var i = optionCount; i < daysCount; i++) {
        $("#select-day").append(
          $("<option></option>")
            .attr("value", i + 1)
            .text(i + 1)
        );
      }
    } else {
      for (var i = daysCount; i < optionCount; i++) {
        var optionItem = "#select-day option[value=" + (i + 1) + "]";
        $(optionItem).remove();
      }
    }
  }

  // Display an appropriate # of years
  const setYears = () => {
      let year = props.date.year;
      for (let i = 0; i < 5; i++) {
        $("#select-year").append(
          $("<option></option>")
            .attr("value", year - i)
            .text(year - i)
        );
      }
    }

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setDate({
      ...props.date,
      [name]: value,
    });
  };

  return (
    <div className="select-date float-right" onChange={handleChange}>
      <select name="day" id="select-day" value={props.date.day} onChange={handleChange}></select>
      <select name="month" id="select-month" value={props.date.month-1} onChange={handleChange}>
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
      <select name="year" id="select-year"></select>
      <button className="btn btn-outline-danger" id="daysearch">
        Search
      </button>
    </div>
  );
}
