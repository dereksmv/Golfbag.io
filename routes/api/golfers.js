const express = require("express");
const router = express.Router();
const golfer = require("../../services/golfers")

router.post("/create_new", golfer.saveGolfer)
router.get("/search/:first_name/:last_name", golfer.retrieveGolfer)

module.exports = router