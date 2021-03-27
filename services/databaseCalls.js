const Golfers = require("../models/Golfers");
const Tournaments = require("../models/Tournaments");


module.exports = {
    removeDashes: function(str) {return str.replace(/_/g, " ");},

    retrieve: function(req, res, searchParams, schema) {
        schema.findOne(searchParams, (err, doc) => {
            if (err) {
                console.log(err);
                res.json({message: "Sorry! Something went wrong."})
            } if (doc) {
                res.json(doc)
            } else {
                res.json({message: "Not found."})
            }
        })
    },

    saveToDb: function(req, res, searchParams, schema) {
        let errMessage = { message: "Sorry! Something went wrong." }
        let newDbObject = new schema(req.body)
        schema.findOne(searchParams, (err, doc) => {
            if (err) {
                console.log(err);
                res.json(errMessage)
            } if (doc) {
                schema.updateOne(searchParams, (err, updated) => {
                    if (err) {
                        console.log(err);
                        res.json(errMessage)
                    } if (updated) {
                        res.json({ message: "Update successful" })
                    }
                })
            } else {
                newDbObject.save((err, doc) => {
                    if (err) {
                        console.log(err)
                        res.json(errMessage)
                    } if (doc) {
                        res.json({ message: "Save successful" })
                    }
                })
            }
        }
        )
    },

    findAll: function(req, res, searchParams, schema) {
        schema.find(searchParams, (err, doc) => {
            if (err) {
                console.log(err);
                res.json({message: "Sorry! Something went wrong."})
            } if (doc) {
            
                res.json(doc)
            } else {
                res.json({message: "Not found."})
            }
        })
    },

    textSearchDB: function(req, res, searchParams, schema) {
        schema.find({ $text: {$search: searchParams} }, (err, doc) => {
            if (err) {
                console.log(err);
            } if (doc) {
                console.log(doc);
                res.send(doc);
            }
        })
    },

    generateHomePage: function(req, res) {
        let golfers = [];
        let tournaments = [];
        function generateResponse(title, info) {
            return {
                type: title,
                info: info
            };
        };
        Golfers.find({},
            (err, doc) => {
                if (err) {
                    console.log(err);
                } if (doc) {
                    doc.forEach(element => {
                        golfers.push(generateResponse("golfer", element));     
                    });
                }
                Tournaments.find({}, (err, doc) => {
                    if (err) {console.log(err)}
                    if (doc) {
                        doc.forEach(element => {
                            console.log(element);
                            tournaments.push(generateResponse("tournament", element));
                        })
                        let response = [];
                            for (let i = 0; i < 100; i++) {
                                response.push(golfers[i], tournaments[i]);
                            } 
                            res.json(response);
                    }
                }).limit(50);
                
            }
            ).limit(50);
      
        }
}