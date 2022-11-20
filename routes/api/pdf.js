const router = require("express").Router();
const pdfController = require("../../controllers/pdfController");

// Matches with "/api/pdf"
router
.route("/")
.post(pdfController.read);



module.exports = router;
