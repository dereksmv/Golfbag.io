const golfClubs = require("../models/Golfclubs")


const golfbag = {

    clubObj: function(clubs) {
        return new golfClubs(clubs)
    },

    errMessage: "Something went wrong",

    successMessage: "Successfully saved",

    findClub: function() {
        return "[]D [] []\/[] []D"
    }

}

module.export = golfbag