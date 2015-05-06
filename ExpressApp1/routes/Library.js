var express = require('express');
var router = express.Router();
var LibData = require('./DBApi/LibraryData.js');



//Router

//Get a list of all books
router.get('/books', LibData.GetAllBooks);

//Get using Object Ddata Mapper (mongoose)
router.get('/booksByODM', LibData.GetBookUsingModel);

//Insert a new book
router.post('/books', LibData.AddNewBook);

//Get a single book by id
router.get('/books/:id', LibData.GetBookById);

//Update a book
router.put('/books/:id', LibData.UpdateBookById);

//Delete a book
router.delete('/books/:id', LibData.DeleteBookById);

module.exports = router;