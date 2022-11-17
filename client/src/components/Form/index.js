import React, { useState } from "react";
import "./style.css";


export default function Form() {
  const [info, setInfo] = useState({
    date: "",
    weight: "",
    title: "",
    food: "",
    time: "",
    bloating: "",
    headache: "",
    gas: "",
    itchiness: "",
    reflux: "",
    redness: "",
    noseRunning: "",
    howLong: "",
    other: "",
  });
  return (
    <div className="container">
  <form className="form" id="foodform">
    <div className="row">
      <select
        className="form-select"
        aria-label="Default select example"
        name="title"
        type="time"
        id="mealTitle"
      >
        <option value="breakfast">Breakfast</option>
        <option value="mid-morning">Mid-Morning Snack</option>
        <option value="lunch">Lunch</option>
        <option value="afternoon">Afternoon Snack</option>
        <option value="dinner">Dinner</option>
      </select>
    </div>
    <div className="row">
      <label htmlFor="food eaten" className="form-label">
        Food Eaten:
      </label>
      <textarea
        className="form-control"
        id="foodeaten"
        rows={4}
        name="food"
        type="text"
        defaultValue={""}
      />
    </div>
    <div className="row">
      {/* <div class="col timeslot" id="timeslots"> */}
      <select
        className="form-select timing"
        aria-label="Default select example"
        name="time"
        type="time"
        id="time"
      >
        <option selected="" value="5:00am">
          5:00am
        </option>
        <option value="6:00am">6:00am</option>
        <option value="7:00am">7:00am</option>
        <option value="8:00am">8:00am</option>
        <option value="9:00am">9:00am</option>
        <option value="10:00am">10:00am</option>
        <option value="11:00am">11:00am</option>
        <option value="12:00am">12:00am</option>
        <option value="1:00pm">1:00pm</option>
        <option value="2:00pm">2:00pm</option>
        <option value="3:00pm">3:00pm</option>
        <option value="4:00pm">4:00pm</option>
        <option value="5:00pm">5:00pm</option>
        <option value="6:00pm">6:00pm</option>
        <option value="7:00pm">7:00pm</option>
        <option value="8:00pm">8:00pm</option>
        <option value="9:00pm">9:00pm</option>
        <option value="10:00pm">10:00pm</option>
      </select>
      {/* </div> */}
    </div>
    <div className="row">
      <div className="col">
        <div className="input-group mb-3" id="weight">
          <span className="input-group-text">Morning Weight</span>
          <input
            type="text"
            className="form-control"
            aria-label="Amount"
            name="weight"
            id="weightInput"
          />
          <span className="input-group-text">lb</span>
        </div>
      </div>
    </div>
    <div className="row" id="checks">
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="bloat"
            name="bloating"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Bloating
          </label>
        </div>
      </div>
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="head"
            name="headache"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Headache
          </label>
        </div>
      </div>
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="gas"
            name="gas"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Gas
          </label>
        </div>
      </div>
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="itchiness"
            name="itchiness"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Itchiness
          </label>
        </div>
      </div>
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="reflux"
            name="reflux"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Reflux
          </label>
        </div>
      </div>
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="redness"
            name="redness"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Redness/Flushing
          </label>
        </div>
      </div>
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="noseRunning"
            name="noseRunning"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Nose Running
          </label>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col" id="howLongLabel">
        <label htmlFor="food eaten" className="form-label">
          How long after meal:
        </label>
      </div>
      <div className="col-8" id="howlong">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="howLong"
            id="inlineRadio1"
            defaultValue="Immediately"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Immediately
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="howLong"
            id="inlineRadio2"
            defaultValue="Within 1st Hour"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Within 1st Hour
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="howLong"
            id="inlineRadio3"
            defaultValue="1 to 2 Hours"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            1 to 2 Hours
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="howLong"
            id="inlineRadio1"
            defaultValue="2 - 4 hours"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            2 - 4 hours
          </label>
        </div>
      </div>
    </div>
    <div className="row">
      <label htmlFor="food eaten" className="form-label">
        Other:
      </label>
      <textarea
        className="form-control"
        name="other"
        type="text"
        rows={1}
        id="other"
        defaultValue={""}
      />
    </div>
    <div className="row">
      <button
        type="submit"
        className="btn btn-outline-danger"
        id="savebtn"
        value="Send form data!"
      >
        Save
      </button>
    </div>
  </form>
</div>

  );
 
}