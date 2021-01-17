const Golfers = require("../models/Golfers");



module.exports = {

    saveGolfer: function(req, res) {
        let searchParams = {first_name: req.body.first_name, last_name: req.body.last_name};
        let newGolfer = new Golfers(req.body);
        newGolfer.player_image = req.file.path;;
        req.body.player_image = req.file.path
        console.log(newGolfer.player_image);
        Golfers.findOne(searchParams, (err, doc) => {
            if (err) {
                console.log(err);
                res.json({message: "Oops! Something went wrong!"})
            } if (doc) {
                Golfers.updateOne(searchParams, {$set: req.body}, (err, updated) => {
                    if (err) {
                        console.log(err)
                    } if (updated) {
                        console.log(req.body.player_image);
                        res.json({message: "Successfully made updates to " + searchParams.first_name + " " + searchParams.last_name})
                    }
                })
                } else {
                    newGolfer.save((err, doc) => {
                        if (err) {
                            console.log(err);
                            res.json({message: "Sorry! Something went wrong!"})
                        } if (doc) {
                            res.json({message: "Created new golfer " + searchParams.first_name + " " + searchParams.last_name})
                        }
                    })
                }
            })
        },

        retrieveGolfer: function(req, res) {
            let first_name = req.params.first_name;
            let last_name = req.params.last_name;
            let searchParameters = { first_name: first_name, last_name: last_name }
            Golfers.findOne(searchParameters, (err, found) => {
                if (err) { console.log.log(err);
                res.json({message: "Sorry! Something went wrong!"})
                } if (found) {
                    res.json(found)
                }
            } )
        }

    }