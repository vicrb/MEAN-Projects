var express = require('express');
var router = express.Router();

router.get('/SrcCtrl', function SrcCtrlRoot(request, response) { 
    response.send('In Source Control API Root')
});

router.get('/SrcCtrl/CheckIn', function CheckIn(request, response) {
    response.send('CheckIn')
});

router.get('/SrcCtrl/CheckOut', function CheckOut(request, response) {
    response.send('CheckOut')
});

module.exports = router;
