import React from "react";
import "./style.css";
import API from "../../utils/API";
const { menu } = require('./menu.js')

export default function FoodPanel() {

    // attempt to store the menu
    // then retrieve the menu and display it
    // console.log(menu);
    
    // API.storeUserMenu(menu).then((newMeal) => {
    //   console.log(newMeal.data);
    // });
    // API.getMenu().then((result) => {
    //   console.log(result);
    // });

  return (
    <div className="container" id="panelContainer">
      <h1>Veggies</h1>
      <button>ACORN SQUASH</button>
      <button>BOK CHOY</button>
      <button>CAULIFLOWER</button>
      <button>ACORN SQUASH</button>
      <button>BOK CHOY</button>
      <button>CAULIFLOWER</button>
      <button>ACORN SQUASH</button>
      <button>BOK CHOY</button>
      <button>CAULIFLOWER</button>
      <button>ACORN SQUASH</button>
      <button>BOK CHOY</button>
      <button>CAULIFLOWER</button>

      <h1>Title</h1>
      <button>ACORN SQUASH</button>
      <button>BOK CHOY</button>
      <button>CAULIFLOWER</button>
    </div>
  );
}
