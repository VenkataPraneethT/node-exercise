var express = require('express');
var router = express.Router();
//var q = require('q');
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var sort = req.query.sort;
    request({
            method: 'GET',
            url: 'http://swapi.co/api/people'

        },
        function (error, response, body) {
            if (error) {
                return console.error(error);
            }
            var parsedResponse = JSON.parse(body);
            var onlyResults = parsedResponse.results;
            sortValues(onlyResults, sort);
            console.log(onlyResults);

            res.send(onlyResults);
        })
   // res.render('pages/characters');

    //res.send('respond with a resource');
    function sortValues(respon, sortBy)
    {
        if(sortBy == 'mass'){
            respon.sort(function(x, y) {

                return parseFloat(x.mass) - parseFloat(y.mass);
            });

        }
        else if(sortBy == 'height'){
            respon.sort(function(x, y) {

                return parseFloat(x.height) - parseFloat(y.height);
            });

        }
        else if(sortBy == 'name'){
            respon.sort(function(x,y) {
                if ( x.name.toLowerCase() < y.name.toLowerCase() )
                    return -1;
                if ( x.name.toLowerCase() > y.name.toLowerCase() )
                    return 1;
                return 0;
            } );

        }


    }
});

module.exports = router;
