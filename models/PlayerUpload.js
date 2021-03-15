const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerUploadSchema = new Schema({

    url: {
        type: String,
        required: true
    },

    sponsor: {
        type: String,
        required: true
    }

})

// eslint-disable-next-line no-undef
module.exports = Golfer = mongoose.model("PlayerUpload", PlayerUploadSchema);