"use strict";

console.log("Do we have products?");

var productPromise = new Promise ( (resolve, reject) =>{
    $.getJSON("products.json", function(parsedProductData){
        resolve(parsedProductData);
    }).fail(function(arg1, arg2, arg3){
        reject(new Error("Product Jason did not load", arg2, arg3));
    });
});
