import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/Chart";
import StatsCalendar from "../../components/StatsCalendar";
import "./style.css";


// Also, it could be usefull to have last month, last year, last week buttons??
// The useeffect is quite complex. Try optimizing. 

export default function StatsPage(props) {
  const navigate = useNavigate();

  const [beginning, setBeginning] = useState(
    (
      props.date.month +
      "|" +
      props.date.day +
      "|" +
      (props.date.year - 1)
    ).split("|")
  );
  // const [end, setEnd] = useState(props.date.date.split("|"));

  const [bloating, setBloating] = useState();
  const [gas, setGas] = useState();
  const [headache, setHeadache] = useState();
  const [itchiness, setItchiness] = useState();
  const [noseRunning, setNoseRunning] = useState();
  const [redness, setRedness] = useState();
  const [reflux, setReflux] = useState();

  useEffect(() => {
    if (props.currentUser) {
   
      // Creating array for each symtom
      let bloatingFood = [];
      let gasFood = [];
      let headacheFood = [];
      let itchinessFood = [];
      let noseRunningFood = [];
      let rednessFood = [];
      let refluxFood = [];

      // Filling the symtoms array whith the foods that caused them
      props.currentUser.meals.forEach((meal) => {
        let month = parseInt(meal.date.split("|")[0]);
        let day = parseInt(meal.date.split("|")[1]);
        let year = parseInt(meal.date.split("|")[2]);

        // beginning must be less or equal

        let previous = false;

        if (parseInt(beginning[2]) < year) previous = true;
        else if (
          parseInt(beginning[2]) === year &&
          parseInt(beginning[0]) < month
        ){
          previous = true;
        }
          
        else if (
          parseInt(beginning[2]) === year &&
          parseInt(beginning[0]) === month &&
          parseInt(beginning[1]) <= day
        )
        {
          previous = true;
        }
          

        if (previous) {
          if (meal.bloating.occurred) {
            bloatingFood = bloatingFood.concat(meal.food);
          }
          if (meal.gas.occurred) {
            gasFood = gasFood.concat(meal.food);
          }
          if (meal.headache.occurred) {
            headacheFood = headacheFood.concat(meal.food);
          }
          if (meal.itchiness.occurred) {
            itchinessFood = itchinessFood.concat(meal.food);
          }
          if (meal.noseRunning.occurred) {
            noseRunningFood = noseRunningFood.concat(meal.food);
          }
          if (meal.redness.occurred) {
            rednessFood = rednessFood.concat(meal.food);
          }
          if (meal.reflux.occurred) {
            refluxFood = refluxFood.concat(meal.food);
          }
        }
      });

      let bloating = {};
      let gas = {};
      let headache = {};
      let itchiness = {};
      let noseRunning = {};
      let redness = {};
      let reflux = {};

      // enumerating the occurrences of each symptoms for each food
      // BLOATING
      for (const element of bloatingFood) {
        if (bloating[element]) {
          bloating[element]++;
        } else {
          bloating[element] = 1;
        }
      }
      // console.log(bloating);
      setBloating({ bloating });
      // GAS
      for (const element of gasFood) {
        if (gas[element]) {
          gas[element]++;
        } else {
          gas[element] = 1;
        }
      }
      // console.log(gas);
      setGas({ gas });
      // HEADACHE
      for (const element of headacheFood) {
        if (headache[element]) {
          headache[element]++;
        } else {
          headache[element] = 1;
        }
      }
      // console.log(headache);
      setHeadache({ headache });
      // ITCHINESS
      for (const element of itchinessFood) {
        if (itchiness[element]) {
          itchiness[element]++;
        } else {
          itchiness[element] = 1;
        }
      }
      // console.log(itchiness);
      setItchiness({ itchiness });
      // NOSERUNNING
      for (const element of noseRunningFood) {
        if (noseRunning[element]) {
          noseRunning[element]++;
        } else {
          noseRunning[element] = 1;
        }
      }
      // console.log(noseRunning);
      setNoseRunning({ noseRunning });
      // REDNESS
      for (const element of rednessFood) {
        if (redness[element]) {
          redness[element]++;
        } else {
          redness[element] = 1;
        }
      }
      // console.log(redness);
      setRedness({ redness });
      // REFLUX
      for (const element of refluxFood) {
        if (reflux[element]) {
          reflux[element]++;
        } else {
          reflux[element] = 1;
        }
      }
      // console.log(reflux);
      setReflux({ reflux });
  }
  else navigate("/");
  }, [beginning]);

  return (
    <div className="chartpage">
      <StatsCalendar
        beginning={beginning}
        setBeginning={setBeginning}
        date={props.date}
      />
      {bloating ? <Chart data={bloating} symtom="bloating" /> : ""}
      {gas ? <Chart data={gas} symtom="gas" /> : ""}
      {headache ? <Chart data={headache} symtom="headache" /> : ""}
      {itchiness ? <Chart data={itchiness} symtom="itchiness" /> : ""}
      {noseRunning ? <Chart data={noseRunning} symtom="noseRunning" /> : ""}
      {redness ? <Chart data={redness} symtom="redness" /> : ""}
      {reflux ? <Chart data={reflux} symtom="reflux" /> : ""}
    </div>
  );
}
