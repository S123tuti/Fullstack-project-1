const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();

app.use(express.json()); 
app.use(cors()); 
mongoose.connect("");

app.post("/register", (req, res) => {
 
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});


app.listen(3001, () => {
  console.log("server is running on Port 3001");
});

