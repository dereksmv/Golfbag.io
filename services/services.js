const golfClubs = require("../models/Golfclubs")



module.exports = {
    removeDashes: function(str) {return str.replace(/_/g, " ");},

    errMessage: "Oops! Something went wrong.",

    clubIsStored: function(obj) {
        golfClubs.findOne(obj, (err, doc) => {
            if (err) { return false }
            if (doc) { return true }
            else { return false }
        })
    },

    retrieveClubData: (req, res) => {
        let manufacturer = module.exports.removeDashes(req.params.manufacturer);
    let brandName = module.exports.removeDashes(req.params.brand_name);
    let clubType = module.exports.removeDashes(req.params.club_type);
    let searchParams = { manufacturer: manufacturer, brand_name: brandName, club_type: clubType };
        if (module.exports.clubIsStored(searchParams)) {
            golfClubs.findOne(searchParams, (err, doc) => {
                if (err) {
                    res.json({message: module.exports.errMessage})
                } if (doc) {
                    res.json(doc)
                }
            })
        } else {
            res.json({message: "Not found", searchParams: searchParams})
        }
    }
}