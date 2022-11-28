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

  // setSearchedItem("");

  useEffect(() => {
    API.getMenu().then((result) => {
      setMenu(result.data);
    });
    console.log(props);
  }, []);

  // API.storeUserMenu(menuStart).then((newMeal) => {
  //   console.log(newMeal.data);
  // });

  let handleSearch = (event) => {
    setSearchedItem(event.target.value);
  };
  let addItem = (event) => {
    props.setInfo((prevState) => ({
      ...prevState,
      food: props.food.concat(event.target.value),
    }));
    setSearchedItem("");
  };

  return (
    // <div className="container" id="panelContainer">
    //   <div className="row">
    //     <div className="col">
    //       <h2 className="menutitle"> Vegetables/Legumes</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Vegetable") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}
    //     </div>
    //     <div className="col">
    //       <h2 className="menutitle"> Fruit</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Fruit") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}
    //     </div>
    //     <div className="col">
    //       <h2 className="menutitle"> Meats</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Meat") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}

    //       <h2 className="menutitle"> Dairy/Eggs</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Dairy/Eggs") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}

    //       <h2 className="menutitle"> Grain/Starch</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Grain/Starch") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}
    //     </div>

    //     <div className="col">
    //       <h2 className="menutitle"> Herb/Spice</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Herb/Spice") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}
    //     </div>
    //     <div className="col">
    //       <h2 className="menutitle"> Seafood</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Seafood") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}
    //     </div>

    //     <div className="col">
    //       <h2 className="menutitle"> Nuts/OilsMiscFood</h2>
    //       {menu
    //         ? menu.map((item) => {
    //             if (item.category === "Nuts/OilsMiscFood") {
    //               return (
    //                 <button
    //                   type="button"
    //                   className="btn btn-success menubutton"
    //                   key={item._id}
    //                 >
    //                   {item.name}
    //                 </button>
    //               );
    //             } else return "";
    //           })
    //         : ""}
    //     </div>
    //   </div>
    // </div>

    // container
    <>
      <div className="row">
        <input
          //aria-label="Search Name"
          value={searchedItem ? searchedItem : ""}
          name="searchedItem"
          type="text"
          placeholder="Search Item"
          onChange={handleSearch}
        />
      </div>
      <div className="row">
        <select
          className="form-select"
          aria-label="Default select example"
          id="category-select"
          // name=""
          // onChange={handleChange}
        >
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
      {searchedItem
        ? menu.map((result) => {
            //     return (result.name).substring(0,searchedItem.length).toUpperCase() === searchedItem.toUpperCase()

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
