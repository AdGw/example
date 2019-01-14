const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const app = express();
const routes = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.use(flash());
app.use('/', routes);
module.exports = app;