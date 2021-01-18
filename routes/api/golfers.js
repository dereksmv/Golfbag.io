const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");

const Golfer = require("../../models/Golfers")

const golfer = require("../../services/golfers")
const db = require("../../services/databaseCalls")

const multerGoogleStorage = require("multer-google-storage");

var uploadHandler = multer({
  storage: multerGoogleStorage.storageEngine()
});




router.post("/create/new", uploadHandler.single('player_image'), golfer.saveGolfer)

router.get("/search/:first_name/:last_name", golfer.retrieveGolfer)

router.get("/find/", (req, res) => {
    console.log(req.query)
    db.textSearchDB(req, res, req.query.searchParams, Golfer)
})

    router.get("/all", (req, res) => {
        db.findAll(req, res, {}, Golfer)
    })

module.exports = router