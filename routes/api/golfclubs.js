/* eslint-disable no-sequences */
const express = require("express");
const router = express.Router();
const golfClubs = require("../../models/Golfclubs")
const golfBag = require("../../services/services")
const db = require("../../services/databaseCalls")
const multer = require("multer");


router.post("/create_new", (req, res) => {
    const image = {};
    console.log("ping")
    console.log(req.body)
    const newClub = new golfClubs(req.body);
    if (req.file) {
        image.url = req.file.url;
        image.id = req.file.public_id;
        newClub.image = image.url
        }
    
    const searchParamaters = { club_type: req.body.club_type, manufacturer: req.body.manufacturer, brand_name: req.body.brand_name, club_name: req.body.club_name }
    golfClubs.findOne(searchParamaters, (err, doc) => {
        if (err) { console.log(err); res.json({message: "Uh oh. Something went wrong."}) }
        if (doc) {
            golfClubs.updateOne(searchParamaters, (err, updated) => {
                // eslint-disable-next-line no-unused-expressions
                if (err) { console.log(err), res.json({message: "Uh oh. Something went wrong."}) }
                if (updated) { res.json({message: `Updated the ${searchParamaters.manufacturer} ${searchParamaters.brand_name} ${searchParamaters.club_type}`}) }
            })
        } else {
            newClub.save((err, doc) => {
                if (err) {
                    console.log(err)
                    res.json({message: "Uh-oh. Something went wrong"})
                } if (doc) {
                    res.json({message: `Saved the ${searchParamaters.manufacturer} ${searchParamaters.brand_name} ${searchParamaters.club_type}`})
                }
            })
        }
    })
})

router.get("/search/:club_type", (req, res) => {
    let searchParamaters = {club_type: req.params.club_type}
    db.findAll(req, res, searchParamaters, golfClubs)
})

router.get("/search/:club_type/:manufacturer/:brand_name", (req, res) => {
    if (req.params.brand_name === "NULL") {
        var searchParamaters = {club_type: req.params.club_type, manufacturer: req.params.manufacturer};
    } else {
        var searchParamaters = {club_type: req.params.club_type, manufacturer: req.params.manufacturer, brand_name: req.params.brand_name}
    }
    db.findAll(req, res, searchParamaters, golfClubs)
})



router.get("/:manufacturer/:brand_name/:club_type/:club_name", (req, res) => {
    golfBag.retrieveClubData(req, res)
})





module.exports = router;