const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: false
    },

    country: {
        type: String,
        required: true
    },

    winner: {
        type: String,
        required: false
    },

    archived: {
        type: Boolean,
        required: false
    }

})

// eslint-disable-next-line no-undef
module.exports = Tournaments = mongoose.model("Tournaments", TournamentSchema);