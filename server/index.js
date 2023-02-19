require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/userModel");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/getUsers", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
  app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
  });
});
