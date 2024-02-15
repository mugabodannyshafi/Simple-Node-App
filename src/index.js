const express = require("express");
const mongoose = require("mongoose")

const bookController = require("./controllers/books")

mongoose.connect("mongodb://localhost:27017/mongoose-express", {
     useNewUrlParser: true
     })
     .then(() => {

        const app = express()

        app.use(express.json())

        app.get("/books", bookController.findBooks); 
        app.post("/books", bookController.createBook)
        app.get("/books/:id", bookController.findBook)
        app.patch("/books/:id", bookController.updateBook)
        app.delete("/books/:id", bookController.deleteBook)
        const port = 5003
        app.listen(port, () =>{
            console.log(`sever has started on ${port}`)
    });
     
     })
     .catch(() =>
     {
        console.log("oops! Database connection failed")
     })
   