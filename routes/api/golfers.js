const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");

const Golfer = require("../../models/Golfers")

const golfer = require("../../services/golfers")
const db = require("../../services/databaseCalls");
const Golfers = require("../../models/Golfers");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname + '../../../uploads/'));
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + req.body.first_name + "-" + req.body.last_name + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/create/new", upload.single('player_image'), golfer.saveGolfer)

router.get("/search/:first_name/:last_name", golfer.retrieveGolfer)

router.get("/find/", (req, res) => {
    console.log(req.query)
    db.textSearchDB(req, res, req.query.searchParams, Golfer)
})

router.get("/all", (req, res) => {
    db.findAll(req, res, {}, Golfers)
})

module.exports = router