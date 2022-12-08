const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
.route("/")
.get(userController.findAll)
.post(userController.create)
.delete(userController.remove)


// Matches with "/api/user/id/:id"
router
  .route("/id/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/day"
// router
//   .route("/day")
//   .get(userController.findAll)
  // .put(userController.update)
  // .delete(userController.remove);

module.exports = router;