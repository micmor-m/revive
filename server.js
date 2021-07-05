const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let templateVars = {};

  res.render("sale", templateVars);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at post 3000");
});
