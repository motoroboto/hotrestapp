//Dependencies and Variables
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var reservedTables = [];
var waitlist = [];

// Routes 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});