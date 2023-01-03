import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/Chart";

export default function StatsPage(props) {
  const navigate = useNavigate();

  const [bloating, setBloating] = useState();

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
      console.log(bloating);
      setBloating({ bloating });
      // GAS
      for (let i = 0; i < gasFood.length; i++) {
        if (gas[gasFood[i]]) {
          gas[gasFood[i]]++;
        } else {
          gas[gasFood[i]] = 1;
        }
      }
      console.log(gas);
      // HEADACHE
      for (let i = 0; i < headacheFood.length; i++) {
        if (headache[headacheFood[i]]) {
          headache[headacheFood[i]]++;
        } else {
          headache[headacheFood[i]] = 1;
        }
      }
      console.log(headache);
      // ITCHINESS
      for (let i = 0; i < itchinessFood.length; i++) {
        if (itchiness[itchinessFood[i]]) {
          itchiness[itchinessFood[i]]++;
        } else {
          itchiness[itchinessFood[i]] = 1;
        }
      }
      console.log(itchiness);
      // NOSERUNNING
      for (let i = 0; i < noseRunningFood.length; i++) {
        if (noseRunning[noseRunningFood[i]]) {
          noseRunning[noseRunningFood[i]]++;
        } else {
          noseRunning[noseRunningFood[i]] = 1;
        }
      }
      console.log(noseRunning);
      // REDNESS
      for (let i = 0; i < rednessFood.length; i++) {
        if (redness[rednessFood[i]]) {
          redness[rednessFood[i]]++;
        } else {
          redness[rednessFood[i]] = 1;
        }
      }
      console.log(redness);
      // REFLUX
      for (let i = 0; i < refluxFood.length; i++) {
        if (reflux[refluxFood[i]]) {
          reflux[refluxFood[i]]++;
        } else {
          reflux[refluxFood[i]] = 1;
        }
      }
      console.log(reflux);

     
    }
  }, []);

  return (
    <>
    {bloating ? <Chart data={bloating} symtom="bloating" /> : ""}
      
    </>
  );
}
