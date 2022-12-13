const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const mealSchema = new Schema({
  date: { type: String, required: true },
  weight: Number,
  title: { type: String, required: true },
  food: [String],
  time: String,
  bloating: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  headache: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  gas: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  itchiness: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  reflux: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  redness: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  noseRunning: {
    occurred: Boolean,
    when: {
      type: String,
      required: true,
      enum: ["Immediately", "Within 1st Hour", "1 to 2 Hours", "2 - 4 hours"],
    },
  },
  other: String,
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

mealSchema.pre("remove", function (next) {
  console.log("THIS IS PRE");
  // Remove all the assignment docs that reference the removed person.
  // this.model('User').remove({ meal: this._id }, next);
  console.log(this._id);
  console.log(this.user);

  // this.model('User').findOneAndUpdate({ meal: this._id },{ $pull: { meals: { _id: this._id } } }, next);
  this.model("User").updateOne(
    { _id: this.user },
    { $pull: { meals: this._id } },
    next
  );
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
