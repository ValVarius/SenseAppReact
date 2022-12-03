const router = require("express").Router();
const mealsController = require("../../controllers/mealsController");

// Matches with "/api/meals"
router
.route("/")
.get(mealsController.findAll)
.post(mealsController.create)
.delete(mealsController.removeByDateTitle)


// Matches with "/api/meals/id/:id"
router
  .route("/id/:id")
  .get(mealsController.findById)
  .put(mealsController.update)
  .delete(mealsController.remove);

// Matches with "/api/meals/day"
router
  .route("/day")
  .get(mealsController.findAll)
  // .put(mealsController.update)
  // .delete(mealsController.remove);

module.exports = router;
