const router = require("express").Router();
const mealRoutes = require("./meals");
const pdfRoutes = require("./pdf");
const menuRoutes = require("./menu");
const userRoutes = require("./user");

// Meal routes

router.use("/user", userRoutes);
router.use("/meals", mealRoutes);
router.use("/pdf", pdfRoutes);
router.use("/menu", menuRoutes);

module.exports = router;
