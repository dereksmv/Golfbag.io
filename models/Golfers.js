const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GolferSchema = new Schema({

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    }

})

module.exports = Golfer = mongoose.model("Golfer", GolferSchema);