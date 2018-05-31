const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

app.use(routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
