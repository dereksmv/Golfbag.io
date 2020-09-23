const express = require("express");
const router = express.Router();
const golfClubs = require("../../models/Golfclubs")
const golfBag = require("../../services/services")

router.post("/create_new", (req, res) => {
    console.log(req.body)
    const newClub = new golfClubs(req.body);
    const searchParamaters = { club_type: req.body.club_type, manufacturer: req.body.manufacturer, brand_name: req.body.brand_name }
    golfClubs.findOne(searchParamaters, (err, doc) => {
        if (err) { console.log(err); res.json({message: "Uh oh. Something went wrong."}) }
        if (doc) {
            golfClubs.updateOne(searchParamaters, (err, updated) => {
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

router.get("/:manufacturer/:brand_name/:club_type", (req, res) => {
    golfBag.retrieveClubData(req, res)
})

module.exports = router;