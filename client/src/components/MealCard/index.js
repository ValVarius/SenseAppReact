import React from "react";
import "./style.css";

export default function MealCard(props) {
  return (
    <div className=" cardcontainer">
        {/* TITLE */}
      <div className="MealCardTitle">
        <button type="button" class="btn btn-danger deleteMeal">
          X
        </button>
        <h1>{props.log.title.charAt(0).toUpperCase() + props.log.title.slice(1)}</h1>
        <div className="timeweight">
        {props.log.time ? <div className="timelogged">{props.log.time}</div> : <div className="timelogged">No time logged</div>}
        {!props.log.weight &&  props.log.title == "breakfast" ? <div className="timelogged">No weight logged</div>  : ""}
        {props.log.weight ? <div className="weightlogged">{props.log.weight} lb</div> : ""}
        </div>
      </div>

      {/* FOOD ITEMS LOGGED */}
      {props.log.food ? <div>Food Eaten:</div> : <div>No Food Recorded:</div>}
      
      {props.log.food
          ? props.log.food.map((result) => {
              return (
                <div key={result}>{result}</div>
              );
            })
          : ""}

      {/* SIDE EFFECT */}

      {props.log.bloating.occurred ||
      props.log.headache.occurred ||
      props.log.gas.occurred ||
      props.log.itchiness.occurred ||
      props.log.reflux.occurred ||
      props.log.redness.occurred ||
      props.log.noseRunning.occurred ? (
        <div>Side Effects:</div>
      ) : (
        <div>NO Side Effects:</div>
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

      {/* OTHER */}
      {props.log.other ? <div>Comments: {props.log.other}</div> : ""}

    </div>
  );
}
