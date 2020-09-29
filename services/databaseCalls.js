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
    }

    
}