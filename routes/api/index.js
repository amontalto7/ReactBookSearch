const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./gbooks");

// Book routes
router.use("/books", bookRoutes);

// Google books routes
router.use("/gbooks", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  
module.exports = router;