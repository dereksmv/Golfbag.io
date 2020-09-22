const express = require("express");
const router = express.Router();
const golfbag = require('../../services/services')

router.post("/create_new", (req, res) => {
    /*let clubs = golfbag.clubObj(req.body);    
    res.json(golfbag.saveClub(clubs))*/
    console.log(golfbag.findClub())
    res.json(golfbag)
})

module.exports = router;