// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express Application
const app = express();
const PORT = 3000;


// Set up Express application to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Data
// ================================================
let notes = [
    {
    title: "title of note one",
    text: "notes",
    id: ""
    },
    {
    title: "title of note two",
    text: "notes",
    id: ""
    }
];

// Routes
// ===============================================


app.get("/", function(request, response) {
    // response.send("Welcome to Note Taker!");
    response.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "./notes.html"));

});



// Displays all notes
app.get("/api/notes", function(request, response) {
    return response.json(notes);
});

// Displays a single note, or shows "No notes found"
app.get("/api/notes/:notes", function(request, response) {
    // Grabs the selected parameter
    let chosen = request.params.notes;

    console.log(chosen);
    
    // Filter to show only the selected note
    for (let i = 0; i < notes.length; i++) {
        if (chosen === notes[i].id) {
            return response.json(notes[i]);
        }
    }

    // Otherwise, displays "No notes found" or false.
    return response.json("No notes found.");
});


// Create new Notes - takes in JSON input
app.post("/api/notes", function(request, response) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let newNotes = request.body;

    // Use a RegEx Pattern to remove spaces from newNotes
    newNotes.id = newNotes.title.replace(/^/g, "").toUpperCase();

    console.log(newNotes);

    notes.push(newNotes);

    response.json(newNotes);


});

// Get and use the CSS file
app.use(express.static("public"));

// Listener
// =======================================================
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});