const router = require("express").Router();
const googleRoutes = require("./gbooks");

// Google books routes
router.use("/gbooks", googleRoutes);

module.exports = router;