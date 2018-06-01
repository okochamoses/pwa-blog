const mongoose = require("mongoose");
const { mongoURI } = require("./keys");

const db = mongoose
  .connect(mongoURI)
  .then(() => console.log("Database connection established"))
  .catch(err => console.log(err));

module.exports = db;
