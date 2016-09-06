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
           // console.log("Full response");
            var response = JSON.parse(body);
            var nameResponse = [];
            for (var i =0 ; i<response.results.length ; i++){

                    if(response.results[i].name.toLowerCase().startsWith(name)){
                        nameResponse.push(response.results[i]);
                        break;
                    }


            }
            //console.log('got response', nameResponse );
            if(nameResponse.length >1){

            }
            else {

                res.render('characters', {
                    name: nameResponse[0].name,
                    birth_year : nameResponse[0].birth_year,
                    eye_color  : nameResponse[0].eye_color,
                    gender  : nameResponse[0].gender,
                    hair_color  : nameResponse[0].hair_color,
                    height  : nameResponse[0].height,
                    mass    : nameResponse[0].mass,
                    skin_color : nameResponse[0].skin_color,
                    homeworld  : nameResponse[0].homeworld,
                    films      : nameResponse[0].films,
                    species    : nameResponse[0].species,
                    starships  : nameResponse[0].starships,
                    vehicles   : nameResponse[0].vehicles,
                    url        : nameResponse[0].url,
                    created    : nameResponse[0].created,
                    edited     : nameResponse[0].edited,
                });
               // res.send(nameResponse);
            }



        })

});

module.exports = router;
