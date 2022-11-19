const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  date: { type: String, required: true },
  weight: Number,
  title: {type: String, required: true},
  food: String,
  time: String,
  bloating: Boolean,
  headache: Boolean,
  gas: Boolean,
  itchiness: Boolean,
  reflux: Boolean,
  redness: Boolean,
  noseRunning: Boolean,
  howLong: String,
  other: String,


  // date: { type: Date, default: Date.now }
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
