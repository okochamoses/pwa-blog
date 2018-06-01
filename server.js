const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const routes = require("./routes/routes");

const app = express();

// Set templating engine
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

// Set static file directory
app.use(express.static(`${__dirname}/public`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Define app routes
app.use("/", routes);

//Database config
const db = require("./config/db");

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
