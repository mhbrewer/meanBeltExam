//require controller so we have access to our logic
const controller = require("../controllers/controller.js");

//this module.exports is a function so we can pass the 'app' to routes.js
module.exports = function(app){
    app.get("/api/pets", controller.allPets)
    app.post("/api/pets", controller.newPet)
    app.delete("/api/pets/:id", controller.deletePet)
    app.get("/api/pets/:id", controller.viewPet)
    app.put("/api/pets/:id", controller.updatePet)
    // app.post("/api/authors/:authorId/quotes", controller.addQuote)
    // app.delete("/api/authors/:authorId/quotes", controller.deleteQuote)
    // app.put("/api/authors/:authorId/quotes", controller.updateQuote)
}