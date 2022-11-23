import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
// const { menuStart } = require("./menuStart.js");

export default function FoodPanel() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    API.getMenu().then((result) => {
      setMenu(result.data);
    });
  }, []);

  // API.storeUserMenu(menuStart).then((newMeal) => {
  //   console.log(newMeal.data);
  // });

  return (
    <div className="container" id="panelContainer">
      <h1>Vegetables</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Vegetable") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
        <h1>Fruit</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Fruit") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
      <h1>Meats</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Meat") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
        <h1>Dairy/Eggs</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Dairy/Eggs") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
        <h1>Grain/Starch</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Grain/Starch") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
         <h1>Herb/Spice</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Grain/Starch") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
      <h1>Seafood</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Seafood") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
      <h1>Nuts/OilsMiscFood</h1>
      {menu
        ? menu.map((item) => {
            if (item.category === "Nuts/OilsMiscFood") {
              return <button key={item._id}>{item.name}</button>;
            }
            else return ""
          })
        : ""}
    </div>
  );
}
