const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: [
      "Nuts/OilsMiscFood",
      "Herb/Spice",
      "Grain/Starch",
      "Seafood",
      "Dairy/Eggs",
      "Meat",
      "Fruit",
      "Vegetable",
    ]
  },
  color: String,
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
