/*Load Node Modules*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*Load Routes*/
var index = require('./routes/index');
var echo = require('./routes/echo');
var SrcCtrlRoutes = require('./routes/SrcCtrl');
var BuildActivityRoutes = require('./routes/BuildActivity');
var LibraryRoutes = require('./routes/Library')

/*DevOps Node API Router, Main REST Api router*/
DNARouter = express.Router();
SrcCtrlActivityRouter = express.Router();
//BuildActivityRouter = express.Router();
//AutoTestActivityRouter = express.Router();

/*Create express app*/
var app = express();

/*view engine setup*/
//We don't need view middleware for a REST Api
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

/*Load node middleware*/
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (request, response) {   
    //Re-direct to main app path    
    response.send('Redirect to DNAApi path');    
});

var DNARoute = DNARouter.route('/DNAApi');
app.use('/DNAApi', DNARouter);
DNARouter.get('/', index);
DNARouter.get(['/Echo','/Echo/*'], echo);

/*REST Api methods*/
//Resource models and LoopBack to be used 

//Source Control tasks Api 
// Http://Localhost/DNAApi/SrcCtrl
//Using Router object and pre-filter
SrcCtrlActivityRouter.get(['/SrcCtrl','/SrcCtrl/*'], SrcCtrlRoutes);
DNARouter.use('/', SrcCtrlActivityRouter);

//Build tasks Api
// Http://Localhost/DNAApi/Build
//Using Routes
DNARouter.use('/', BuildActivityRoutes);

//Library CRUD sample
//ToDo: plug-in database and remove json data
DNARouter.use('/', LibraryRoutes);


/*Catch 404 and forward to error handler*/
app.use(function HttpNotFound (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/* Error handlers */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
