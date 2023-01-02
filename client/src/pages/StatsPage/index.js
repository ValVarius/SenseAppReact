import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function StatsPage(props) {

  const navigate = useNavigate();


  useEffect(() => {
    if (!props.currentUser) navigate("/");
    else {
      let dateMeals = [];

      props.currentUser.meals.forEach((meal) => {
        console.log(meal);
      });

      
    }

  }, []);



  return (
    <div>user info:</div>
  )
}
