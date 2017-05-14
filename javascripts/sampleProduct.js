"use strict";
console.log("is cat loading to the page?");

//let parsedCatData = [];


let categories = function(){
    return new Promise( (resolve, reject) =>{
        $.getJSON("categories.json", function(catData){
//            parsedCatData = CatData;
            console.log(catData.categories);
            resolve(catData.categories);
        }).fail(function(arg1, arg2, arg3){
            reject(new Error("did not load man, sampleProduct.js", arg2, arg3));
        });

    });
};

module.exports = {categories};
