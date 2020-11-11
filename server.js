//Dependencies and Variables
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const tables = require("./tables");
var reservedTables = [];
var waitlist = [];

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables-page.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation-form.html"));
});

app.get("/api/tables", function (req, res) {
    console.log("body:", req.body);
    return res.json(tables);
});


app.post("/api/tables", (req, res) => {
    let newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
    console.log("body:", tables);
});

app.listen(PORT, function () {
    console.log("app listening on PORT" + PORT);
});


// $(".submit").on(click, function () {
//     var newReservation = {
//         name: $("#reserve_name").val().trim(),
//         phone: $("#reserve_phone").val().trim(),
//         email: $("#reserve_email").val().trim(),
//         id: $("#reserve_uniqueID").val().trim(),
//     }
//         .post("/api/tables", newReservation);
//     // console.log('newReservation:', newReservation)
//     console.log('tables', tables)
// });