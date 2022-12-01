import React, { useState, useEffect } from "react";
import "./style.css";
import $ from "jquery";

export default function Calendar(props) {
  useEffect(() => {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    setDate();
    setYears(5); // set the next five years in dropdown

    $("#select-month").change(function () {
      let monthIndex = $("#select-month").val();
      setDays(monthIndex);
    });

    // display the desired date
    function setDate() {
      setDays(props.date.month);
      $("#select-day").val(props.date.day);
      $("#select-month").val(props.date.month);
      $("#select-year").val(props.date.year);
    }

    // make sure the number of days correspond with the selected month
    function setDays(monthIndex) {
      console.log(monthIndex);
      var optionCount = $("#select-day option").length,
        daysCount = daysInMonth[monthIndex];

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
    function setYears(val) {
      let year = props.date.year;

      console.log(year);
      console.log(year);
      for (let i = 0; i < val; i++) {
        $("#select-year").append(
          $("<option></option>")
            .attr("value", year - i)
            .text(year - i)
        );
      }
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setDate({
      ...props.date,
      [name]: value,
    });
  };

  return (
    <div className="select-date float-right" onChange={handleChange}>
      <select name="day" id="select-day"></select>
      <select name="month" id="select-month">
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
