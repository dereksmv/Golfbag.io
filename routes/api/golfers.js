const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const countries = require("../../config/countries")

const Golfer = require("../../models/Golfers")

const golfer = require("../../services/golfers")
const db = require("../../services/databaseCalls")

const multerGoogleStorage = require("multer-google-storage");

var uploadHandler = multer({
  storage: multerGoogleStorage.storageEngine()
});




router.post("/create/new", uploadHandler.single('player_image'), golfer.saveGolfer)

router.get("/search/:first_name/:last_name", golfer.retrieveGolfer)

router.get("/filters/:tour/:sponsorship/:country", (req, res) => {
    let searchParams = {};
    if (req.params.tour !== "false") {
        searchParams.tour = req.params.tour
    } 

    if (req.params.sponsorship !== "false") {
        searchParams.sponsorship = req.params.sponsorship
    }

    if (req.params.country !== "false") {
        searchParams.country = golfer.returnCountryFromCountryCode(countries, req.params.country)
    }
    console.log(searchParams)
    db.findAll(req, res, searchParams, Golfer)
})

router.get("/find/", (req, res) => {
    console.log(req.query)
    db.textSearchDB(req, res, req.query.searchParams, Golfer)
})

    router.get("/all", (req, res) => {
        db.findAll(req, res, {}, Golfer)
    })

module.exports = router