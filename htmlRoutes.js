const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/Develop/public/exercise.html"));
  });
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/Develop/public/stats.html"));
  });
router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname + "/Develop/public/index.html"));
  });

  module.exports = router;