import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import FoodPanel from "../FoodPanel";
import DeleteButton from "../DeleteButton";
import MealCard from "../MealCard";

export default function Form(props) {
  const [info, setInfo] = useState({
    // date: props.date.month + "|" + props.date.day + "|" + props.date.year,
    title: "breakfast",
    date: props.date.date,
    weight: "",
    food: [],
    time: "",
    bloating: { occurred: false, when: "Immediately" },
    headache: { occurred: false, when: "Immediately" },
    gas: { occurred: false, when: "Immediately" },
    itchiness: { occurred: false, when: "Immediately" },
    reflux: { occurred: false, when: "Immediately" },
    redness: { occurred: false, when: "Immediately" },
    noseRunning: { occurred: false, when: "Immediately" },
    other: "",
  });

  useEffect(() => {
    setInfo((prevState) => ({
      ...prevState,
      date: props.date.date,
      weight: "",
      food: [],
      time: "",
      bloating: { occurred: false, when: "Immediately" },
      headache: { occurred: false, when: "Immediately" },
      gas: { occurred: false, when: "Immediately" },
      itchiness: { occurred: false, when: "Immediately" },
      reflux: { occurred: false, when: "Immediately" },
      redness: { occurred: false, when: "Immediately" },
      noseRunning: { occurred: false, when: "Immediately" },
      other: "",
    }));
    for (let i = 0; i < props.logs.length; i++) {
      if (props.logs[i].title === info.title) {
        setInfo((prevState) => ({
          ...prevState,
          date: props.logs[i].date,
          weight: props.logs[i].weight,
          food: props.logs[i].food,
          time: props.logs[i].time,
          bloating: props.logs[i].bloating,
          headache: props.logs[i].headache,
          gas: props.logs[i].gas,
          itchiness: props.logs[i].itchiness,
          reflux: props.logs[i].reflux,
          redness: props.logs[i].redness,
          noseRunning: props.logs[i].noseRunning,
          other: props.logs[i].other,
        }));
      }
    }
  }, [info.title]);

  useEffect(() => {
    setInfo((prevState) => ({
      ...prevState,
      date: props.date.date,
    }));
  }, [props.date.date]);

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;

    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCheckbox = (event) => {
    // event.preventDefault();
    console.log(event.target.name);
    console.log(event.target.checked);
    // console.log(event.target.parentElement.parentElement.children[1].value);

    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: {
        occurred: event.target.checked,
        when: "Immediately",
      },
    }));
  };
  const handleRadio = (event) => {
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: { occurred: true, when: event.target.value },
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // event.target.id= "savebtnSaved"
    console.log(event.target.id);
    API.deletePrevious(info).then((res) => {
      console.log(res);
      API.mealRegistration(info).then((newMeal) => {
        console.log(newMeal);
        props.setRetrieved(false);
      });
    });
  };

  const deleteItem = (item) => {
    setTimeout(() => {
      setInfo((prevState) => ({
        ...prevState,
        food: info.food.filter((res) => {
          return res !== item;
        }),
      }));
    }, 1750);
  };

  return (
    <>
    <div className="container">
      <form className="form" id="foodform">
        <div name="date" onChange={handleChange}>
          {props.date.date}
        </div>

        <select
          className="form-select"
          aria-label="Default select example"
          name="title"
          type="time"
          id="mealTitle"
          onChange={handleChange}
        >
          <option value="breakfast">Breakfast</option>
          <option value="mid-morning">Mid-Morning Snack</option>
          <option value="lunch">Lunch</option>
          <option value="afternoon">Afternoon Snack</option>
          <option value="dinner">Dinner</option>
        </select>

        <FoodPanel food={info.food} setInfo={setInfo} />

        {info.food
          ? info.food.map((result) => {
              return (
                <div className="foodeaten" key={result}>
                  <button
                    type="button"
                    className="btn btn-success foodeaten-button"
                    name="food"
                    value={result}
                    disabled
                  >
                    {result}
                  </button>

                  <DeleteButton deleteItem={deleteItem} item={result} />
                </div>
              );
            })
          : ""}

        <div id="timeandweight">
          <select
            className="form-select timing"
            aria-label="Default select example"
            defaultValue="5:00am"
            name="time"
            type="time"
            id="time"
            onChange={handleChange}
          >
            <option value="5:00am">5:00am</option>
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

          <div className="input-group mb-3" id="weight">
            {info.title === "breakfast" ? (
              <>
                <span className="input-group-text">Morning Weight</span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount"
                  name="weight"
                  id="weightInput"
                  onChange={handleChange}
                />
                <span className="input-group-text">lb</span>
              </>
            ) : null}
          </div>
        </div>

        <label id="reactionslabel" htmlFor="food eaten" className="form-label">
          Side Effects:
        </label>
        <div className="effect">
          {/* BLOATING  */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="bloat"
                name="bloating"
                checked={info.bloating.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Bloating
              </label>
            </div>

            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloating"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.bloating.when == "Immediately" &&
                    info.bloating.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloating"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.bloating.when == "Within 1st Hour" &&
                    info.bloating.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloating"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.bloating.when == "1 to 2 Hours" &&
                    info.bloating.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bloating"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.bloating.when == "2 - 4 hours" &&
                    info.bloating.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
          {/* HEADACHE */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="head"
                name="headache"
                checked={info.headache.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Headache
              </label>
            </div>
            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="headache"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.headache.when == "Immediately" &&
                    info.headache.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="headache"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.headache.when == "Within 1st Hour" &&
                    info.headache.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="headache"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.headache.when == "1 to 2 Hours" &&
                    info.headache.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="headache"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.headache.when == "2 - 4 hours" &&
                    info.headache.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
          {/* GAS */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="gas"
                name="gas"
                checked={info.gas.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Gas
              </label>
            </div>
            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gas"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.gas.when == "Immediately" && info.gas.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gas"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.gas.when == "Within 1st Hour" && info.gas.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gas"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.gas.when == "1 to 2 Hours" && info.gas.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gas"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.gas.when == "2 - 4 hours" && info.gas.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
          {/* ITCHINESS */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="itchiness"
                name="itchiness"
                checked={info.itchiness.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Itchiness
              </label>
            </div>
            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="itchiness"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.itchiness.when == "Immediately" &&
                    info.itchiness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="itchiness"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.itchiness.when == "Within 1st Hour" &&
                    info.itchiness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="itchiness"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.itchiness.when == "1 to 2 Hours" &&
                    info.itchiness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="itchiness"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.itchiness.when == "2 - 4 hours" &&
                    info.itchiness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
          {/* REFLUX */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="reflux"
                name="reflux"
                checked={info.reflux.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Reflux
              </label>
            </div>
            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reflux"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.reflux.when == "Immediately" && info.reflux.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reflux"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.reflux.when == "Within 1st Hour" &&
                    info.reflux.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reflux"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.reflux.when == "1 to 2 Hours" && info.reflux.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reflux"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.reflux.when == "2 - 4 hours" && info.reflux.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
          {/* REDNESS */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="redness"
                name="redness"
                checked={info.redness.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Redness/Flushing
              </label>
            </div>
            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redness"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.redness.when == "Immediately" && info.redness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redness"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.redness.when == "Within 1st Hour" &&
                    info.redness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redness"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.redness.when == "1 to 2 Hours" && info.redness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="redness"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.redness.when == "2 - 4 hours" && info.redness.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
          {/* RUNNING NOSE */}
          <div className="checks">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="noseRunning"
                name="noseRunning"
                checked={info.noseRunning.occurred}
                onChange={handleCheckbox}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Nose Running
              </label>
            </div>
            <div className="timeframeDiv">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="noseRunning"
                  id="inlineRadio1"
                  defaultValue="Immediately"
                  checked={
                    info.noseRunning.when == "Immediately" &&
                    info.noseRunning.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Immediately
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="noseRunning"
                  id="inlineRadio2"
                  defaultValue="Within 1st Hour"
                  checked={
                    info.noseRunning.when == "Within 1st Hour" &&
                    info.noseRunning.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  1st Hour
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="noseRunning"
                  id="inlineRadio3"
                  defaultValue="1 to 2 Hours"
                  checked={
                    info.noseRunning.when == "1 to 2 Hours" &&
                    info.noseRunning.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  1 to 2 Hours
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="noseRunning"
                  id="inlineRadio1"
                  defaultValue="2 - 4 hours"
                  checked={
                    info.noseRunning.when == "2 - 4 hours" &&
                    info.noseRunning.occurred
                      ? true
                      : false
                  }
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  2 - 4 hours
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* END OF SIDE EFFECTS */}

        <label htmlFor="food eaten" className="form-label">
          Other:
        </label>
        <textarea
          className="form-control"
          name="other"
          type="text"
          rows={2}
          id="other"
          defaultValue={""}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-outline-danger"
          id="savebtn"
          value="Send form data!"
          onClick={handleFormSubmit}
        >
          Save
        </button>
      </form>
    </div>
    </>
  );
}
