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
          { "new": true, "upsert": true }
          // function (err, User) {
          //     if (err) throw err;
          //     res.json(User)

          // }
      )
      .populate("meals")
      // .exec((err, pres2) => {
      //   if (err) {
      //     console.log('parent err: ' + err);
      //     return;
      //   }
      //   console.log('parent re-saved:');
      //   console.dir(pres2); // child2 not included, even though its parent ref was updated before we got here

      // });
      .then(dbUser => {
        console.log(dbUser);
        res.json(dbUser)
        // if (req.session.user) {
        //     res.json(dbUser)
        // }
        // if (dbUser===null) {
        //     // req.session.user = false
        //     console.log("WRONG USER");
        //     res.send("no user found")
        // }
        // else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
        //     // req.session.user = dbUser
        //     // console.log("JUST CREATED SESSION ", req);
        //     console.log("PASSWORD MATCH");
        //     res.json(dbUser)
        // }
        
        // else {
        //     // req.session.user = false
        //     console.log("WRONG password");
        //     res.send("incorrect password")
        // }
      })
      




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
