const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GolferSchema = new Schema({

    first_name: {
        type: String,
        required: true,
        text: true
    },

    last_name: {
        type: String,
        required: true,
        text: true
    },

    player_image: {
        type: String,
        required: true
    },
    
    sponsorship: {
        type: String,
        required: false
    },

    tour: {
        type: String,
        required: true
    },

    rank: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },



})

// eslint-disable-next-line no-undef
module.exports = Golfer = mongoose.model("Golfer", GolferSchema);