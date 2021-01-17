const express = require("express");
// eslint-disable-next-line no-unused-vars
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const golfer = require("./routes/api/golfers")
const bodyParser = require("body-parser");
const path = require("path")


const golfclubs = require("./routes/api/golfclubs")
const tournaments = require("./routes/api/tournaments");
const golfbag = require("./routes/api/golfbags")
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
  .catch(err => console.log(err))

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there


app.listen(port, () => console.log(`Server up and running on port ${port}`));

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.use("/api/golf_clubs", golfclubs);

app.use("/api/golfers", golfer)

app.use("/api/tournaments", tournaments)

app.use("/api/golfbag", golfbag)

app.get('*', function(req, res) {
  return res.sendFile(path.resolve( __dirname, 'build' , 'index.html'));
})