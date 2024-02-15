const Book = require("../models/book")

exports.findBooks =  async (req, res) => {
    const books = await Book.find();

    res.send({data: books})
}

exports.createBook = async (req, res) =>{
    const book = new Book(req.body);
    await book.save();
    res.send({ data: book})
}

exports.findBook = async (req, res) =>{
    
    try{
        const book = await Book.findById(req.params.id);
        res.send({ data: book})
    }
    catch{
        res.status(404).send({ error: 'oops! The book not found'})
    }
}

exports.updateBook = async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id);
        book.save()
        Object.assign(book, req.body)
        res.send({ data: book})
    }
    catch{
        res.status(404).send({ error: 'oops! The book not found'})
    } 
}

exports.deleteBook = async (req, res) =>
{
    try{
        const book = await Book.findById(req.params.id);
        await book.remove()
        res.send({ data: true})
    }
    catch{
        res.status(404).send({ error: 'oops! The book not found'})
    } 
}