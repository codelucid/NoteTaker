// Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express Application
const app = express();
const PORT = process.env.PORT || 3000;


// Set up Express application to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 
// app.use(bodyParser.json());

// Get and use the CSS file
app.use(express.static("public"));


// DATA
// Get and use data from db.json


// Use Express to pass these JS files to the server
require("./routing/api-routes")(app);
require("./routing/html-routes")(app);




// Listener
// =======================================================
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});