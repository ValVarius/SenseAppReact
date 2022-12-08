const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Meal = require('./meal');

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;