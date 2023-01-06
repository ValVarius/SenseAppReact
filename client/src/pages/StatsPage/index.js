import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/Chart";
import StatsCalendar from "../../components/StatsCalendar";
import "./style.css";

export default function StatsPage(props) {
  const navigate = useNavigate();

  const [beginning, setBeginning] = useState(
    (
      props.date.month +
      "|" +
      props.date.day +
      "|" +
      (props.date.year - 2)
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
    if (!props.currentUser) navigate("/");
    else {
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

        console.log(parseInt(beginning[2]) <= year);
        console.log(parseInt(beginning[0]) <= month);
        console.log(parseInt(beginning[1]) <= day);

        // beginning must be less or equal

        let previous = false;

        if (parseInt(beginning[2]) < year) previous = true;
        else if ( parseInt(beginning[2]) === year && parseInt(beginning[0]) < month) previous = true
        else if (parseInt(beginning[2]) === year && parseInt(beginning[0]) === month && parseInt(beginning[1]) <= day) previous = true
        

          

        if(previous) {
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
      for (let i = 0; i < bloatingFood.length; i++) {
        if (bloating[bloatingFood[i]]) {
          bloating[bloatingFood[i]]++;
        } else {
          bloating[bloatingFood[i]] = 1;
        }
      }
      // console.log(bloating);
      setBloating({ bloating });
      // GAS
      for (let i = 0; i < gasFood.length; i++) {
        if (gas[gasFood[i]]) {
          gas[gasFood[i]]++;
        } else {
          gas[gasFood[i]] = 1;
        }
      }
      // console.log(gas);
      setGas({ gas });
      // HEADACHE
      for (let i = 0; i < headacheFood.length; i++) {
        if (headache[headacheFood[i]]) {
          headache[headacheFood[i]]++;
        } else {
          headache[headacheFood[i]] = 1;
        }
      }
      // console.log(headache);
      setHeadache({ headache });
      // ITCHINESS
      for (let i = 0; i < itchinessFood.length; i++) {
        if (itchiness[itchinessFood[i]]) {
          itchiness[itchinessFood[i]]++;
        } else {
          itchiness[itchinessFood[i]] = 1;
        }
      }
      // console.log(itchiness);
      setItchiness({ itchiness });
      // NOSERUNNING
      for (let i = 0; i < noseRunningFood.length; i++) {
        if (noseRunning[noseRunningFood[i]]) {
          noseRunning[noseRunningFood[i]]++;
        } else {
          noseRunning[noseRunningFood[i]] = 1;
        }
      }
      // console.log(noseRunning);
      setNoseRunning({ noseRunning });
      // REDNESS
      for (let i = 0; i < rednessFood.length; i++) {
        if (redness[rednessFood[i]]) {
          redness[rednessFood[i]]++;
        } else {
          redness[rednessFood[i]] = 1;
        }
      }
      // console.log(redness);
      setRedness({ redness });
      // REFLUX
      for (let i = 0; i < refluxFood.length; i++) {
        if (reflux[refluxFood[i]]) {
          reflux[refluxFood[i]]++;
        } else {
          reflux[refluxFood[i]] = 1;
        }
      }
      // console.log(reflux);
      setReflux({ reflux });
    }
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
