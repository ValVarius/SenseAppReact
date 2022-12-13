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

mealSchema.pre(["remove"], function (next) {
  console.log("THIS IS PRE REMOVE");
  // Remove all the assignment docs that reference the removed meal.

  this.model("User").updateOne(
    { _id: this.user },
    { $pull: { meals: this._id } },
    next
  );
});

// mealSchema.pre("deleteOne", async function (next) {
//   try {
//     let deletedData = await Meal.findOne(this._conditions);
//     console.log(deletedData);
//     console.log(deletedData.user);
//     console.log(deletedData._id);
//     this.model("User")
//       .updateOne(
//         { _id: deletedData.user },
//         { $pull: { meals: deletedData._id } },
//         next
//       )
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   } catch (error) {
//     next;
//   }
// });
// mealSchema.pre("deleteOne", function (next) {
//   console.log("THIS IS PRE DELETE ONE");
//   console.log(this._conditions);
//   Meal.findOne(this._conditions)
//     .then((data) => {
//       console.log("FOUND");
//       console.log(data);

//       if (data) {
//         console.log("updating");
//         console.log(data.user);
//         console.log(data._id);
//         User.updateOne(
//           { _id: data.user },
//           { $pull: { meals: data._id } },
//           next
//         );
//       } 
//       next
//     })
//     .catch((err) => {
//       console.log(err);
//       next
//     });
//     next()
// });

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
