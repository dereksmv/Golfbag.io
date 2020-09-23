const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const golfclubs = require("./routes/api/golfclubs")
const bodyParser = require("body-parser");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGO_URI;
// Connect to MongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false } )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there


app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.use("/api/golf_clubs", golfclubs);