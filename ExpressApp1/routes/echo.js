var express = require('express');
var router = express.Router();
var url = require('url')

/* GET echo. */
router.get('/Echo', function Echo (request, response) {
    response.write('ECHO \n');
    response.write('Usage: /ECHO/:<text to echo>');
    response.end();
});

router.get('/Echo/:t', function EchoText(request, response) {
    response.write('Echoing \n');
    response.write(request.params.t);
    response.end();
});

module.exports = router;