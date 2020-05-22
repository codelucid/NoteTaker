let notesArray = require("../db/db");
const fs = require("fs");

module.exports = function (app) {

    app.get("/api/notes", function(request, response) {
        response.json(notesArray);
        // console.log(notesArray);
    });


    app.post("/api/notes", function (request, response) {
        // let data = fs.readFileSync("./db.db.json", "utf8");
        // let notes = JSON.parse(data);
        // let newNote = request.body;
        // notes.append(json.parse(newNote)).)

    
        const currentNote = request.body;
        const randomNum = Math.floor(Math.random()* 100).toString();
        const title = currentNote.title;
        const text = currentNote.text;
        const freshNote = {
            title,
            text,
            id:randomNum
        } 
        notesArray.push(freshNote);
        
        fs.writeFile("db/db.json", JSON.stringify(notesArray, null, 2), function (err) {
            if (err) {
                throw err;
            }else{
                console.log("The data made it to db.json"); 
            }

           

        })
        response.json(notesArray);
    });


    app.delete("/api/notes/:id", function (request, response) {

        const chosenNote = request.params.id

        // console.log(chosenNote);

         // Filter to show only the selected note
        notesArray = notesArray.filter(function(note){
            return note.id !== chosenNote;
        });
        
        
        
        
        // We don't need a FOR LOOP because the user will target the exact note to delete. FILTER
         // for (let i = 0; i < notesArray; i++) {
        //     if (chosenNote === notesArray[i].id) {
        //         notesArray -= chosenNote
        //         return response.json(notesArray[i]);
        //     }
        // }
        fs.writeFile("db/db.json", JSON.stringify(notesArray, null, 2), function (err) {
            if (err) {
                throw err;
            }else{
                console.log("The selected note was deleted from the db.json"); 
            }

           

        })
    

    // Respond with the new notes array
        response.json(notesArray);
    
    });


}

