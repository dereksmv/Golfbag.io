const express = require("express");
const router = express.Router();
const tournament = require("../../services/tournaments")
const db = require("../../services/databaseCalls")
const tourney = require("../../models/Tournaments")

router.post("/create_new", tournament.saveNewTournament);

router.get("/search/:name/:year", function(req, res) {
    let name = req.params.name;
    let year = req.params.year;
    let searchParams = {name: name, year: year}
    db.retrieve(req, res, searchParams, tourney)
})


module.exports = router