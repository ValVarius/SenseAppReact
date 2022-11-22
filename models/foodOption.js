const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodOptionSchema = new Schema({
  name: { type: String, required: true },
  category: {
    String,
    enum: [
      "Nuts/OilsMiscFood",
      "Herb/Spice",
      "Grain/Starch",
      "Seafood",
      "Dairy/Eggs",
      "Meat",
      "Fruit",
      "Vegetable",
    ],
    required: true
  },
  color: String,
});

const FoodOption = mongoose.model("foodOptions", foodOptionSchema);

module.exports = FoodOption;
