var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    request({
            method: 'GET',
            url: 'http://swapi.co/api/people'

        },
        function (error, response, body) {
            if (error) {
                return console.error(error);
            }
            console.log("Full response");
            var response = JSON.parse(body);
            var nameResponse = {};
            for (var i =0 ; i<response.results.length ; i++){

                    if(response.results[i].name.startsWith(name)){
                        nameResponse = response.results[i];
                        break;
                    }


            }
            console.log('got response', nameResponse );

            res.send(nameResponse);
        })

});

module.exports = router;
