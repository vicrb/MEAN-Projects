
//Get a list of all books
exports.GetAllBooks = function (request, response) {
    var books = [
        {
            title: "Book 1",
            author: "Author 1",
            releaseDate: "01/01/2014"
        },
        {
            title: "Book 2",
            author: "Author 2",
            releaseDate: "02/02/2014"
        }
    ];
    
    response.send(books);
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