import React from "react";
import "./style.css";
import API from "../../utils/API";

export default function MealCard(props) {
  const deletecard = () => {
    API.deleteId(props.log._id).then((res) => {
      console.log(props.currentUser);
      for (let i = 0; i < props.currentUser.meals.length; i++) {
        if (props.currentUser.meals[i]._id === props.log._id) {
          let newArr = [...props.currentUser.meals];
          newArr.splice(i, 1);
          props.setLogs(newArr);

          props.setCurrentUser((prevState) => ({
            ...prevState,
            meals: newArr,
          }));
        }
      }
    });
  };

  return (
    <div className=" cardcontainer">
      {/* TITLE */}
      <div className="MealCardTitle">
        <button
          type="button"
          className="btn btn-danger deleteMeal"
          onClick={deletecard}
        >
          X
        </button>
        <h1>
          {props.log.title.charAt(0).toUpperCase() + props.log.title.slice(1)}
        </h1>
        <div className="timeweight">
          {props.log.time ? (
            <div className="timelogged">{props.log.time}</div>
          ) : (
            <div className="timelogged">No time logged</div>
          )}
          {!props.log.weight && props.log.title == "breakfast" ? (
            <div className="timelogged">No weight logged</div>
          ) : (
            ""
          )}
          {props.log.weight ? (
            <div className="weightlogged">{props.log.weight} lb</div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* FOOD ITEMS LOGGED */}
      <div className="cardbody">
        <div className= "foodItemlist">
        {props.log.food ? <div className="cardtitle">Food Eaten:</div> : <div className="cardtitle">No Food Recorded:</div>}

          {props.log.food
            ? props.log.food.map((result) => {
                return (
                  <div className="fooditem" key={result}>
                    {result}
                  </div>
                );
              })
            : ""}
        </div>
        {/* SIDE EFFECT */}
              <div className="sideffects">
        {props.log.bloating.occurred ||
        props.log.headache.occurred ||
        props.log.gas.occurred ||
        props.log.itchiness.occurred ||
        props.log.reflux.occurred ||
        props.log.redness.occurred ||
        props.log.noseRunning.occurred ? (
          <div className="cardtitle">Side Effects:</div>
        ) : (
          <div className="cardtitle">NO Side Effects.</div>
        )}
        {props.log.bloating.occurred ? (
          <div>Bloating... {props.log.bloating.when}</div>
        ) : (
          ""
        )}
        {props.log.headache.occurred ? (
          <div>Headache... {props.log.headache.when}</div>
        ) : (
          ""
        )}
        {props.log.gas.occurred ? <div>Gas...{props.log.gas.when}</div> : ""}
        {props.log.itchiness.occurred ? (
          <div>Itchiness... {props.log.itchiness.when}</div>
        ) : (
          ""
        )}
        {props.log.reflux.occurred ? (
          <div>Reflux... {props.log.reflux.when}</div>
        ) : (
          ""
        )}
        {props.log.redness.occurred ? (
          <div>Redness... {props.log.redness.when}</div>
        ) : (
          ""
        )}
        {props.log.noseRunning.occurred ? (
          <div>NoseRunning... {props.log.noseRunning.when}</div>
        ) : (
          ""
        )}
        </div>
      </div>
      {/* OTHER */}
      {props.log.other ? <><div className="cardtitle comm">Comments:</div><div className= "comments">{props.log.other}</div></> : ""}
    </div>
  );
}
