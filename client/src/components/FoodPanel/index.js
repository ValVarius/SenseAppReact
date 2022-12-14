import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

// Only for development to store the menu locally..
// const { menuStart } = require("./menuStart.js");

export default function FoodPanel(props) {
  // API.storeUserMenu(menuStart).then((newMeal) => {
  //   console.log(newMeal.data);
  // });

  const [menu, setMenu] = useState();
  const [searchedItem, setSearchedItem] = useState();
  const [searchedCategory, setSearchedCategory] = useState();

  useEffect(() => {
    API.getMenu().then((result) => {
      setMenu(result.data);
    });
  }, []);

  let handleSearch = (event) => {
    event.preventDefault();
    setSearchedCategory("");
    setSearchedItem(event.target.value);
  };

  let addItem = (event) => {
    // check if value already exist and only store if it doesn...

    let check = (item) => {
      return item === event.target.value;
    };
    if (!props.food.some(check)) {
      props.setInfo((prevState) => ({
        ...prevState,
        food: props.food.concat(event.target.value),
      }));
    }

    setSearchedItem("");
    setSearchedCategory("");
  };

  let handleSearchedCategory = (event) => {
    setSearchedItem("");
    setSearchedCategory(event.target.value);
  };

  return (
    <>
      <div className="foodpanelcontainer">
        <input
          aria-label="Search Name"
          id="namesearch"
          value={searchedItem ? searchedItem : ""}
          name="searchedItem"
          type="text"
          placeholder="Search Item"
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          onChange={handleSearch}
        />

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
      {searchedCategory || searchedItem ? (
        <div id="foodbuttonslist">
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

          {searchedItem
            ? menu.map((result) => {
                if (
                  result.name
                    .substring(0, searchedItem.length)
                    .toUpperCase() === searchedItem.toUpperCase()
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
        </div>
      ) : (
        ""
      )}
    </>
  );
}
