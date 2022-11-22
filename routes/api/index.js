const router = require("express").Router();
const mealRoutes = require("./meals");
const pdfRoutes = require("./pdf");
const menuRoutes = require("./menu");

// Meal routes
router.use("/meals", mealRoutes);
router.use("/pdf", pdfRoutes);
router.use("/menu", menuRoutes);

module.exports = router;
