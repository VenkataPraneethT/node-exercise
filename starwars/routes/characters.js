var express = require('express');
var router = express.Router();
//var q = require('q');
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var sort = req.query.sort;
    console.log("came here",sort);
    request({
            method: 'GET',
            url: 'http://swapi.co/api/people'

        },
        function (error, response, body) {
            if (error) {
                return console.error(error);
            }
            console.log(body.results);
            res.send(body.results);
        })
   // res.render('pages/characters');

    //res.send('respond with a resource');
});

module.exports = router;
