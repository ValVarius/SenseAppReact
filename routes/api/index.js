const router = require("express").Router();
const mealRoutes = require("./meals");
const pdfRoutes = require("./pdf");

// Meal routes
router.use("/meals", mealRoutes);
router.use("/pdf", pdfRoutes);

module.exports = router;
