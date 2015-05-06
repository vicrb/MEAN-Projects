
//MongoDB Native Driver
var mongodb = require('mongodb');
//MongoDB object data mapper
var mongoose = require('mongoose');
//User Config module, Get this from config
var mongoServer = 'mongodb://vuser1:vijay123@ds060977.mongolab.com:60977/VMongoLab';

//Schema
var TestBooksSchema = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});


//Get a list of all books
//Using Native driver
exports.GetAllBooks = function (request, response) 
{
    mongodb.MongoClient.connect(mongoServer, function MongoConnect(err, db) 
    {
        if (err) throw err;
        //Use Logging Module
        console.log('Connected to db');
        
        //Get Collection
        var TestBooks = db.collection('TestBooks');
        //Get all documents in the collection
        TestBooks.find().toArray(function GotAllBooks(err, docs) 
        {
            if (err) throw err;
            response.send(docs);
            
            //ToDo: Need to check 
            //db.connection.close();          
        });                                               
    });
};


//Get a list of all books
//Using mongoose model
exports.GetBookUsingModel = function GotBooksUsingODM (request, response) 
{
    //Connect using mongoose    
    var conn = mongoose.createConnection(mongoServer);
    //mongoose.connect(mongoServer);        

    //Model
    var Collection = 'TestBooks';
    var TestBookModel = conn.model('TestBookModel', TestBooksSchema, Collection);
    
    //Query
    return TestBookModel.find(function (err, books) {
        if (err) throw err;

        console.log('Retrieving books from db');
        return response.send(books);       
    });
    
};
 
//Insert a new book
exports.AddNewBook = function (request, response) {
    var book = {
        title: request.body.title,
        author: request.body.author,
        releaseDate: request.body.releaseDate
    };
    
    response.send(book);
};


//Get a single book by id
exports.GetBookById = function (request, response) {
    var book = {
        title: "Unique Book",
        author: "Unique Author",
        releaseDate: "03/03/2014"
    };
    
    response.send(book);
};


//Update a book
exports.UpdateBookById = function (request, response) {
    response.send("Updated!");
};


//Delete a book
exports.DeleteBookById = function (request, response) {
    response.send("Deleted");
};