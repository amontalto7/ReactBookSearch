const router = require("express").Router();
const gbooksController = require ("../../controllers/gbooksController");

// Matches with "/api/gbooks"
router
    .route("/")
    .get(gbooksController.findAll)

module.exports = router;
