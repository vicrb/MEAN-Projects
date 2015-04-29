var express = require('express');
var router = express.Router();

///* GET home page. */
//router.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//});

router.get('/', function (req, res) {
    res.write('Express Node REST API Index: \n');
    res.write('---------------------------- \n')
    res.write('Api Root             GET:    /DNAApi/ \n');
    res.write('Echo                 GET:    /DNAApi/Echo/:text \n\n');
    res.write('Src Ctrl Root        GET:    /DNAApi/SrcCtrl \n');
    res.write('Src Ctrl CheckIn     GET:    /DNAApi/SrcCtrl/CheckIn \n');
    res.write('Src Ctrl CheckOut    GET:    /DNAApi/SrcCtrl/CheckOut \n\n');
    res.write('Build Root           GET     /DNAApi/Build \n\n');
    res.write('Get All Books:       GET:    /DNAApi/books \n');
    res.write('Get All Books by id: GET:    /DNAApi/books/:id \n');
    res.write('Add new Book:       POST:    /DNAApi/books \n');
    res.write('Update a Book:       PUT:    /DNAApi/books/:id \n');
    res.write('Delete a Book:    DELETE:    /DNAApi/books/:id \n');
    res.end();

});



module.exports = router;