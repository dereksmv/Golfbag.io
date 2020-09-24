/* eslint-disable no-sequences */
const express = require("express");
const router = express.Router();
const golfClubs = require("../../models/Golfclubs")
const golfBag = require("../../services/services")
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });
    const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
    const upload = multer({ storage: storage });  


router.post("/create_new", upload.single('goal_images'), (req, res) => {
    const image = {};
    if (req.file) {
        image.url = req.file.url;
        image.id = req.file.public_id;
        }
    console.log(req.body)
    const newClub = new golfClubs(req.body);
    newClub.image = image.url
    const searchParamaters = { club_type: req.body.club_type, manufacturer: req.body.manufacturer, brand_name: req.body.brand_name }
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

router.get("/:manufacturer/:brand_name/:club_type", (req, res) => {
    golfBag.retrieveClubData(req, res)
})

module.exports = router;