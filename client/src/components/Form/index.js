import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import FoodPanel from "../FoodPanel";
import DeleteButton from "../DeleteButton";

export default function Form(props) {
  const [info, setInfo] = useState({
    // date: props.date.month + "|" + props.date.day + "|" + props.date.year,
    title: "breakfast",
    date: props.date.date,
    weight: "0",
    food: [],
    time: "5:00am",
    bloating: { occurred: false, when: "Immediately" },
    headache: { occurred: false, when: "Immediately" },
    gas: { occurred: false, when: "Immediately" },
    itchiness: { occurred: false, when: "Immediately" },
    reflux: { occurred: false, when: "Immediately" },
    redness: { occurred: false, when: "Immediately" },
    noseRunning: { occurred: false, when: "Immediately" },
    other: "",
    user: props.currentUser,
  });

  useEffect(() => {
    let present = false;

    if (props.logs.length > 0) {
      for (let i = 0; i < props.logs.length; i++) {
        if (props.logs[i].title === info.title) {
          present = true;
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
            user: props.currentUser,
          }));
        }
      }
    }
    if (!present) {
      setInfo((prevState) => ({
        ...prevState,
        date: props.date.date,
        weight: "0",
        food: [],
        time: "5:00am",
        bloating: { occurred: false, when: "Immediately" },
        headache: { occurred: false, when: "Immediately" },
        gas: { occurred: false, when: "Immediately" },
        itchiness: { occurred: false, when: "Immediately" },
        reflux: { occurred: false, when: "Immediately" },
        redness: { occurred: false, when: "Immediately" },
        noseRunning: { occurred: false, when: "Immediately" },
        other: "",
        user: props.currentUser,
      }));
    }
  }, [info.title, props.logs]);

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
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: {
        occurred: event.target.checked,
        when: "Immediately",
      },
    }));
  };
  const handleRadio = (event) => {
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: { occurred: true, when: event.target.value },
    }));
  };
  const handleSelectTime = (event) => {
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: { occurred: true, when: event.target.value },
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // event.target.id= "savebtnSaved"

    // CHECK IF MEAL IS NEW OR TO BE UPDATED
    let update = false;
    let id = "";

    for (let i = 0; i < props.logs.length; i++) {
      if (props.logs[i].title === info.title) {
        update = true;
        id = props.logs[i]._id;
        let newArr = [...props.logs];
        let corrected = newArr[i];
        let updated = { ...corrected, ...info };
        newArr[i] = updated;
        props.setLogs(newArr);
      }
    }

    if (update) {
      // api update

      API.mealUpdate(info, id).then((UserUpdate) => {
        props.setCurrentUser(UserUpdate.data);
      });
    } else {
      API.mealRegistration(info).then((UserUpdate) => {
        props.setCurrentUser(UserUpdate.data);
      });
    }

    if (document.body.scrollWidth > 1000) {
      window.scrollTo({
        top: 0,
        left: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }

    // });
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
      <div className="container" id="formcontainer">
        <form className="form" id="foodform">
          <div className="formdate" name="date" onChange={handleChange}>
            {props.date.month}-{props.date.day}-{props.date.year}
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

          <div id="timeandweight">
            <select
              className="form-select timing"
              aria-label="Default select example"
              value={info.time}
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
                    value={info.weight}
                    id="weightInput"
                    onChange={handleChange}
                  />
                  <span className="input-group-text">lb</span>
                </>
              ) : null}
            </div>
          </div>

          <FoodPanel food={info.food} setInfo={setInfo} />
          <div className="foodeatencontainer">
            {info.food
              ? info.food.map((result) => {
                  return (
                    <div className="foodeaten" key={result}>
                      <button
                        type="button"
                        className="btn  foodeaten-button"
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
          </div>
          <label
            id="reactionslabel"
            htmlFor="food eaten"
            className="form-label"
          >
            Side Effects:
          </label>
          <div className="effect">
            {/* BLOATING  */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="bloat"
                  name="bloating"
                  checked={info.bloating.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Bloating
                </label>
              </div>

              {info.bloating.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="bloating"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
            {/* HEADACHE */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="head"
                  name="headache"
                  checked={info.headache.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Headache
                </label>
              </div>
              {info.headache.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="headache"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
            {/* GAS */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="gas"
                  name="gas"
                  checked={info.gas.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Gas
                </label>
              </div>
              {info.gas.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="gas"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
            {/* ITCHINESS */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="itchiness"
                  name="itchiness"
                  checked={info.itchiness.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Itchiness
                </label>
              </div>
              {info.itchiness.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="itchiness"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
            {/* REFLUX */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="reflux"
                  name="reflux"
                  checked={info.reflux.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Reflux
                </label>
              </div>
              {info.reflux.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="reflux"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
            {/* REDNESS */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="redness"
                  name="redness"
                  checked={info.redness.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Flushing
                </label>
              </div>
              {info.redness.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="redness"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
            {/* RUNNING NOSE */}
            <div className="checks">
              <div className="form-check form-switch">
                <input
                  className="form-check-input titleCheck"
                  type="checkbox"
                  role="switch"
                  id="noseRunning"
                  name="noseRunning"
                  checked={info.noseRunning.occurred}
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label labelTitle"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Nose Running
                </label>
              </div>
              {info.noseRunning.occurred ? <select
            className="form-select timeoption"
            aria-label="Default select example"
            name="noseRunning"
            type="time"
            id=""
            onChange={handleSelectTime}
          >
            <option value="Immediately">Immediately</option>
            <option value="Within 1st Hour">1st Hour</option>
            <option value="1 to 2 Hours">1 to 2 Hours</option>
            <option value="2 - 4 hours">2 - 4 hours</option>
          </select> : ""}
            </div>
          </div>
          {/* END OF SIDE EFFECTS */}

          <label htmlFor="food eaten" className="form-label">
            Comments:
          </label>
          <textarea
            className="form-control"
            name="other"
            type="text"
            rows={2}
            id="other"
            value={info.other}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn "
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
