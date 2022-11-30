import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
// const { menuStart } = require("./menuStart.js");

export default function FoodPanel(props) {
  //   let matches = menu.filter(function(result) {
  //     return (result.name).substring(0,searchedItem.length).toUpperCase() === searchedItem.toUpperCase()
  // })
  const [menu, setMenu] = useState();
  const [searchedItem, setSearchedItem] = useState();
  const [searchedCategory, setSearchedCategory] = useState();

  useEffect(() => {
    API.getMenu().then((result) => {
      setMenu(result.data);
    });
  }, []);

  // API.storeUserMenu(menuStart).then((newMeal) => {
  //   console.log(newMeal.data);
  // });

  let handleSearch = (event) => {
    event.preventDefault()
    setSearchedCategory("");
    setSearchedItem(event.target.value);
  };

  let addItem = (event) => {
    props.setInfo((prevState) => ({
      ...prevState,
      food: props.food.concat(event.target.value),
    }));
    setSearchedItem("");
    setSearchedCategory("");
  };

  let handleSearchedCategory = (event) => {
    setSearchedItem("");
    setSearchedCategory(event.target.value);
  };
  

  return (
    <>
      <div className="row">
        <input
          aria-label="Search Name"
          id="namesearch"
          value={searchedItem ? searchedItem : ""}
          name="searchedItem"
          type="text"
          placeholder="Search Item"
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          onChange={handleSearch}
        />
      </div>
      {/* MAYBE THE MENU BY CATEGORY CAN APPEAR AS A MODAL?? */}
      <div className="row">
        <select
          className="form-select"
          aria-label="Default select example"
          id="category-select"
          onClick={handleSearchedCategory}
        >
          <option value="">Search by Category</option>
          <option value="Vegetable">Vegetables</option>
          <option value="Fruit">Fruit</option>
          <option value="Meat">Meats</option>
          <option value="Dairy/Eggs">Dairy/Eggs</option>
          <option value="Grain/Starch">Grain/Starch</option>
          <option value="Herb/Spice">Herb/Spice</option>
          <option value="Seafood">Seafood</option>
          <option value="Nuts/OilsMiscFood">Nuts/OilsMiscFood</option>
        </select>
      </div>
      <div>
        {searchedCategory
          ? menu.map((item) => {
              if (item.category === searchedCategory) {
                return (
                  <button
                    type="button"
                    className="btn btn-success menubutton"
                    key={item._id}
                    name="food"
                    value={item.name}
                    onClick={addItem}
                  >
                    {item.name}
                  </button>
                );
              } else return "";
            })
          : ""}
      </div>

      {searchedItem
        ? menu.map((result) => {
            if (
              result.name.substring(0, searchedItem.length).toUpperCase() ===
              searchedItem.toUpperCase()
            ) {
              return (
                <button
                  type="button"
                  className="btn btn-success menubutton"
                  key={result._id}
                  name="food"
                  value={result.name}
                  onClick={addItem}
                >
                  {result.name}
                </button>
              );
            } else return "";
          })
        : ""}
    </>
  );
}
