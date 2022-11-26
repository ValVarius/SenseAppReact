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
      <div className="row">
        <div className="col">
          <h2 className="menutitle"> Vegetables/Legumes</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Vegetable") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        </div>
        <div className="col">
          <h2 className="menutitle"> Fruit</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Fruit") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        </div>
        <div className="col">
          <h2 className="menutitle"> Meats</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Meat") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        
          <h2 className="menutitle"> Dairy/Eggs</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Dairy/Eggs") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        
          <h2 className="menutitle"> Grain/Starch</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Grain/Starch") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        </div>

        <div className="col">
          <h2 className="menutitle"> Herb/Spice</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Herb/Spice") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        </div>
        <div className="col">
          <h2 className="menutitle"> Seafood</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Seafood") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        </div>

        <div className="col">
          <h2 className="menutitle"> Nuts/OilsMiscFood</h2>
          {menu
            ? menu.map((item) => {
                if (item.category === "Nuts/OilsMiscFood") {
                  return (
                    <button
                      type="button"
                      className="btn btn-success menubutton"
                      key={item._id}
                    >
                      {item.name}
                    </button>
                  );
                } else return "";
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
