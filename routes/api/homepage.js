const express = require("express");
const { generateHomePage } = require("../../services/databaseCalls");
const router = express.Router();

const db = require("../../services/databaseCalls");

router.get("/data", (req, res) => {
    db.generateHomePage(req, res);
} );


module.exports = router

