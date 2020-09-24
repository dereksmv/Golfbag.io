const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GolfClubSchema = new Schema({
    club_type: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
    shaft: {
        type: String,
        required: true
    },
    loft: {
        type: String,
        required: false
    },
    length: {
        type: String,
        required: false
    },
    adjustment: {
        type: String,
        required: false
    },
    lie: {
        type: String,
        required: false
    },
    offset: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    },
    grind: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    year: {
        type: String,
        required: false
    }


})

// eslint-disable-next-line no-undef
module.exports = golfClubs = mongoose.model("golfClubs", GolfClubSchema);