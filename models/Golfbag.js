const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GolfBagSchema = new Schema({
    player: {
        type: Object
    },

    clubs: {
        type: Array
    }
    ,

    tournament: {
        type: String,
        required: true
    }


})

// eslint-disable-next-line no-undef
module.exports = GolfBag = mongoose.model("golfBags", GolfBagSchema);