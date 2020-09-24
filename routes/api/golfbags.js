const express = require("express");
const router = express.Router();
const db = require("../../services/databaseCalls")
const golfBags = require("../../models/Golfbag")

router.post("/create_new", function(req, res) {
    let searchParameters = req.body
    db.saveToDb(req, res, searchParameters, golfBags)
})

router.get("/search/:first_name/:last_name/:tournament", function(req, res) {
    let player = {first_name: db.removeDashes(req.params.first_name), last_name: db.removeDashes(req.params.last_name)}
    let searchParameters = { player: player, tournament: db.removeDashes(req.params.tournament) }
    console.log(searchParameters)
    db.retrieve(req, res, searchParameters, golfBags)
})

module.exports = router;