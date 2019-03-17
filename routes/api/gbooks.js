const router = require("express").Router();
const gbooksController = require ("../../controllers/gbooksController");

// Matches with "/api/gbooks"
router
    .route("/")
    .get(gbooksController.getBooks)

module.exports = router;
