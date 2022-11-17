const router = require("express").Router();
const bookRoutes = require("./meals");

// Meal routes
router.use("/meals", bookRoutes);

module.exports = router;
