"use strict";
console.log("is cat loading to the page?");


var catPromise = new Promise( (resolve, reject) =>{
    $.getJSON("categories.json", function(parsedCatData){
        resolve(parsedCatData);
    }).fail(function(arg1, arg2, arg3){
        reject(new Error("did not load man", arg2, arg3));
    });

});

//set a promise to load json data for categories and to return the parsed data to a result, then set a promise to return an error to reject















