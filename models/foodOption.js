const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodOptionSchema = new Schema({
  name: { type: String, required: true },
  category: String,
  color: String,


  // date: { type: Date, default: Date.now }
});

const FoodOption = mongoose.model("foodOptions", foodOptionSchema);

module.exports = FoodOption;
