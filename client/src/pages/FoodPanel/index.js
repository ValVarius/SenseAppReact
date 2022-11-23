import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
const { menu } = require("./menu.js");

export default function FoodPanel() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    API.getMenu().then((result) => {
      let info = [];
      result.data.forEach((element) => {
        info.push({
          name: element.name,
          category: element.category,
          color: element.color,
          id:element._id
        });
      });
      setMenu(info);
    });
  }, []);

  // API.storeUserMenu(menu).then((newMeal) => {
  //   console.log(newMeal.data);
  // });

  return (
    <div className="container" id="panelContainer">
      

      {menu ? menu.map(item => <button key={item.id}>{item.name}</button>) : ""}

    </div>
  );
}
