const db = require("../models");

// Defining methods for the MealsController
module.exports = {
  findAll: function (req, res) {
    db.Meal.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Meal.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Meal.create(req.body)
      .then((dbModel) => {
        db.User.findByIdAndUpdate(req.body.user,
          { "$push": { "meals": dbModel } },
          { "new": true, "upsert": true },
          function (err, User) {
              if (err) throw err;
              res.json(User)

          }
      );




      })
      

      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Meal.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Meal.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeByDateTitle: function (req, res) {
    db.Meal.remove({ date: req.body.date, title: req.body.title })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
