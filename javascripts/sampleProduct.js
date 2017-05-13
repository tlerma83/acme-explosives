"use strict";
console.log("is cat loading to the page?");

let parsedCatData = [];


let categories = function(){
    return new Promise( (resolve, reject) =>{
        $.getJSON("categories.json", function(CatData){
            parsedCatData = CatData;
            console.log(parsedCatData.categories);
            resolve();
        }).fail(function(arg1, arg2, arg3){
            reject(new Error("did not load man", arg2, arg3));
        });

    });
};

module.exports = {categories};
