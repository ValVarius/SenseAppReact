import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import FoodPanel from "../FoodPanel";
import DeleteButton from "../DeleteButton";

export default function Form(props) {
  const [info, setInfo] = useState({
    // date: props.date.month + "|" + props.date.day + "|" + props.date.year,
    date: props.date.date,
    weight: "",
    title: "breakfast",
    food: [],
    time: "",
    bloating: false,
    headache: false,
    gas: false,
    itchiness: false,
    reflux: false,
    redness: false,
    noseRunning: false,
    howLong: "",
    other: "",
  });

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
    console.log(event);
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
    // setInfo({ [event.target.name]: event.target.checked });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(info);
    API.deletePrevious(info).then((res) => {
      console.log(res);
      API.mealRegistration(info).then((newMeal) => {
        console.log(newMeal);
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

  useEffect(() =>{
    setInfo((prevState) => ({
      ...prevState,
      date: props.date.date,
    }));
     console.log("value changed!")
    }, [props.date.date]);

  return (
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
        <div className="checks">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="bloat"
              name="bloating"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Bloating
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="head"
              name="headache"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Headache
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="gas"
              name="gas"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Gas
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="itchiness"
              name="itchiness"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Itchiness
            </label>
          </div>
        </div>
        <div className="checks">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="reflux"
              name="reflux"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Reflux
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="redness"
              name="redness"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Redness/Flushing
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="noseRunning"
              name="noseRunning"
              onChange={handleCheckbox}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Nose Running
            </label>
          </div>
        </div>
        {/* END OF CHECKS */}

        <label id="howLongLabel" htmlFor="food eaten" className="form-label">
          How long after meal:
        </label>

        <div id="howlong">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="howLong"
              id="inlineRadio1"
              defaultValue="Immediately"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              2 - 4 hours
            </label>
          </div>
        </div>

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
  );
}
