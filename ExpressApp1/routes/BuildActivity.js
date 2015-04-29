var express = require('express');
var router = express.Router();

router.get('/Build', function BuildRoot(request, response) {
    response.send('In ../Build API Root');
});

module.exports = router;
