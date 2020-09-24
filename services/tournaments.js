const Tournaments = require("../models/Tournaments")


module.exports = {
    saveNewTournament: function(req, res) {
        let newTourney = new Tournaments(req.body);
        let searchParams = {name: req.name, date: req.date};
        Tournaments.findOne(searchParams, (err, doc) => {
            if (err) {
                console.log(err);
                res.json({message: "Sorry! Something went wrong."})
            } if (doc) {
                Tournaments.updateOne(searchParams, (err, doc) => {
                    if (err) console.log(err);
                    res.json({message: "Sorry! Something went wrong."})
                    if (doc) {
                        res.json({message: `You update ${req.body.name}`})
                    }
                })
            } else {
                newTourney.save((err, doc) => {
                    if (err) {
                        console.log(err)
                        res.json({message: "Sorry. We can't save this at this time."})
                    } if (doc) {
                        res.json({ message: `You successfully created the tournament ${req.body.name}`})
                    }
                })
            }
        })
    },

}