"use strict";

console.log("Do we have products?");

let products = require('./loadType');


let parsedProductData = [];

let products = () => {
    return new Promise ( (resolve, reject) =>{
        $.getJSON("products.json", function(ProductData){
            parsedProductData = ProductData;
            resolve();
        }).fail(function(arg1, arg2, arg3){
            reject(new Error("Product Jason did not load", arg2, arg3));
        });
    });
};

module.exports = {products};
