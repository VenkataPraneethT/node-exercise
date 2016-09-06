var express = require('express');
var router = express.Router();
var request = require('request');
//var rp = require('request-promise');
//var async = require('async');
var q = require('q');
/* GET users listing. */
router.get('/', function(req, res, next) {

    request({
            method: 'GET',
            url: 'http://swapi.co/api/planets'

        },
        function (error, response, body) {
            if (error) {
                return console.error(error);
            }
            var planetResponses = JSON.parse(body);
            var residentsResponse = {};
            var planetName ;
        //    var urls = [];
            var people = [];
            var i =0;
            var j =0;
            for (var i =0 ; i<planetResponses.results.length ; i++){
         //   while(i< planetResponses.results.length){
                    planetName = planetResponses.results[i].name;

                var len = planetResponses.results[i].residents.length;
                   // urls.push(planetResponses.results[i].name) ;
                for (var j =0 ; j< len; j++){
            //    while(j < len){
                    console.log(planetName, "planeName");
                  //  urls.push(planetResponses.results[i].residents[j]);
                    // console.log(planetResponses.results[i].residents[j], "planets");
                   // request({
                   //          method: 'GET',
                   //          url: planetResponses.results[i].residents[j]
                   //
                   //      },
                   //      function (error, response, body) {
                   //
                   //          if(body){
                   //              var peopleResponses = JSON.parse(body);
                   //
                   //              people.push(peopleResponses.name);
                   //              residentsResponse[planetName] = people;
                   //              if((i == planetResponses.results.length) && (j == len)){
                   //                  // console.log(residentsResponse,"residentsResponse");
                   //                  //res.send(residentsResponse);
                   //              }
                   //
                   //          }
                   //
                   //
                   //      });


                }

             //   people = [];
            }
            //
        })

});

function peopleRes (urls, increments){

    var i;


    if( i < urls.length ) {
        request({
                method: 'GET',
                url: urls[i]

            },
            function (error, response, body) {

                if(body){
                    var peopleResponses = JSON.parse(body);

                    people.push(peopleResponses.name);
                    residentsResponse[planetName] = people;
                    i++;
                    // if((i == planetResponses.results.length) && (j == len)){
                    //
                    // }

                }else {
                    console.log(error);
                }


            });
    }


}

module.exports = router;
