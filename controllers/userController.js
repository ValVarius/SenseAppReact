const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the UserController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .populate("meals")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  login: function (req, res) {
    db.User.findOne({ username: req.body.username })
      .populate("meals")
      //   .sort({ date: -1 })
      .then((dbUser) => {

        console.log(req.session);
        if (req.session.user) {
            res.json(dbUser)
        }

      //   req.session.user = {
      //     uuid: '12234-2345-2323423'
      // } //THIS SETS AN OBJECT - 'USER'
      // req.session.save(err => {
      //     if(err){
      //         console.log(err);
      //     } else {
      //         res.send(req.session.user) // YOU WILL GET THE UUID IN A JSON FORMAT
      //     }
      // });



        else if (!dbUser) {
          req.session.user = false
          console.log("WRONG USER");
          res.send("no user found");
        } else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
          req.session.user = dbUser
          console.log("JUST CREATED SESSION:", req.session);
          console.log("PASSWORD MATCH");
          res.json(dbUser);
        } else {
          req.session.user = false
          console.log("WRONG password");
          res.send("incorrect password");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  readSession: function (req, res) {
    console.log("IN THE READ SESSION");
    res.json(req.session);
  },
  logout: function (req, res) {
    req.session.destroy();
    res.json("logged out!");
  },
};
