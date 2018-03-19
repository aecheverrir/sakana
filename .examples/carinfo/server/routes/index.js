var path = require("path");
var router = require("express").Router();
var carroRouter = require("./carro");

// Web App
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

// API
router.use("/api/carros", carroRouter);

module.exports = router;