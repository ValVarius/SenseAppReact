const router = require("express").Router();
const mealsController = require("../../controllers/mealsController");

// Matches with "/api/meals"
router
.route("/")
.get(mealsController.findAll)
.post(mealsController.create);

// Matches with "/api/meals/:id"
router
  .route("/:id")
  .get(mealsController.findById)
  .put(mealsController.update)
  .delete(mealsController.remove);

module.exports = router;
