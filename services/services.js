const golfClubs = require("../models/Golfclubs")



module.exports = {
    removeDashes: function(str) {return str.replace(/_/g, " ");},

    errMessage: "Oops! Something went wrong.",

    retrieveClubData: (req, res) => {
    let brand_name = module.exports.removeDashes(req.params.brand_name);
    let manufacturer = module.exports.removeDashes(req.params.manufacturer);
    let clubType = module.exports.removeDashes(req.params.club_type);
    let club_name = module.exports.removeDashes(req.params.club_name)
    let searchParams = { manufacturer: manufacturer, brand_name: brand_name, club_type: clubType, club_name: club_name };
    golfClubs.findOne(searchParams, (err, doc) => {
        if (err) {
            console.log(err);
            res.json({message: "Something went wrong"})
        } if (doc) {
            res.json(doc)
        } else {
            res.json({message: "We haven't stored that club yet. Would you like to create a new club?"})
        }
    })
    }
}