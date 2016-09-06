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
            var j=0;
           // console.log(planetResponses.results, "planetresponse");
            residentsRes(0);

            function residentsRes (k){

                var peopleResponse;
             //   console.log(residentsResponse, k,planetResponses.results.length -1, "finally ended" );
                if(k < planetResponses.results.length){
                    //peopleRes(responses.residents[j]);
                    planetName = planetResponses.results[k].name;
                    peopleRes(j);


                }else if(k == planetResponses.results.length ){
                    console.log(residentsResponse, k,planetResponses.results.length -1, "finally ended" );
                    res.send(residentsResponse);
                }

                function peopleRes (j){

                    // console.log(j , planetResponses.results[k].residents.length, "increments");
                    if( j < planetResponses.results[k].residents.length ) {
                        request({
                                method: 'GET',
                                url: planetResponses.results[k].residents[j]

                            },
                            function (error, response, body) {

                                if(body){
                                    var peopleResponses = JSON.parse(body);

                                    people.push(peopleResponses.name);
                                    residentsResponse[planetName] = people;
                                    console.log(j , planetResponses.results[k].residents.length -1)
                                    if(j== planetResponses.results[k].residents.length -1){

                                        people = [];
                                        j=0;
                                        residentsRes(k+1);
                                        //return residentsResponse;
                                    }
                                    else{

                                        peopleRes(j+1);
                                    }

                                }else {
                                    return error;
                                }


                            });
                    }
                    else if(j == planetResponses.results[k].residents.length && j ==0 && planetResponses.results[k].residents.length==0  && k <planetResponses.results.length){
                        residentsRes(k+1);
                    }


                }

            }



         //    for (var i =0 ; i<planetResponses.results.length ; i++){
         // //   while(i< planetResponses.results.length){
         //            planetName = planetResponses.results[i].name;
         //
         //        var len = planetResponses.results[i].residents.length;
         //
         //           // urls.push(planetResponses.results[i].name) ;
         //     //   for (var j =0 ; j< len; j++){
         //    //    while(j < len){
         //          //  urls.push(planetResponses.results[i].residents[j]);
         //            // console.log(planetResponses.results[i].residents[j], "planets");
         //           // request({
         //           //          method: 'GET',
         //           //          url: planetResponses.results[i].residents[j]
         //           //
         //           //      },
         //           //      function (error, response, body) {
         //           //
         //           //          if(body){
         //           //              var peopleResponses = JSON.parse(body);
         //           //
         //           //              people.push(peopleResponses.name);
         //           //              residentsResponse[planetName] = people;
         //           //              if((i == planetResponses.results.length) && (j == len)){
         //           //                  // console.log(residentsResponse,"residentsResponse");
         //           //                  //res.send(residentsResponse);
         //           //              }
         //           //
         //           //          }
         //           //
         //           //
         //           //      });
         //
         //
         //       // }
         //
         //     //   people = [];
         //    }
            //
        })

});








module.exports = router;
