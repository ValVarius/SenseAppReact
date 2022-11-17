import React from "react";
import "./style.css";
import $ from "jquery";

export default function Calendar() {
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let d = new Date();

  setDate(d);
  setYears(5); // set the next five years in dropdown

  $("#select-month").change(function () {
    let monthIndex = $("#select-month").val();
    setDays(monthIndex);
  });

  function setDate(date) {
    setDays(date.getMonth());
    $("#select-day").val(date.getDate());
    $("#select-month").val(date.getMonth());
    $("#select-year").val(date.getFullYear());
  }
  // make sure the number of days correspond with the selected month
  function setDays(monthIndex) {
    let optionCount = $("#select-day option").length,
      daysCount = daysInMonth[monthIndex];

    if (optionCount < daysCount) {
      for (let i = optionCount; i < daysCount; i++) {
        $("#select-day").append(
          $("<option></option>")
            .attr("value", i + 1)
            .text(i + 1)
        );
      }
    } else {
      for (let i = daysCount; i < optionCount; i++) {
        let optionItem = "#select-day option[value=" + (i + 1) + "]";
        $(optionItem).remove();
      }
    }
  }

  function setYears(val) {
    let year = d.getFullYear();
    for (let i = 0; i < val; i++) {
      $("#select-year").append(
        $("<option></option>")
          .attr("value", year - i)
          .text(year - i)
      );
    }
  }

  let month = d.getMonth() + 1;
  let day = d.getDate();
  let year = d.getFullYear();
  let today = month + "|" + day + "|" + year;

  return (
    <div className="select-date">
      <select id="select-day"></select>
      <select id="select-month">
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

      <select id="select-year"></select>
      <button className="btn btn-outline-danger" id="daysearch">
        Search
      </button>
    </div>
  );
}
