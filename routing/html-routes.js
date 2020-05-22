const path = require("path");

module.exports = function (app) {

    // Routes
// ===============================================


    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // app.use( function(request, response) {
    //     response.sendFile(path.join(__dirname, "../public/index.html"));
    // });
}
