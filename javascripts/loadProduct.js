"use strict";


let products = () => {
    return new Promise ( (resolve, reject) =>{

        $.getJSON("products.json", function(productData){
            resolve(productData.products);

        }).fail(function(arg1, arg2, arg3){
            reject(new Error("Product Jason did not load", arg2, arg3));
        });
    });
};

module.exports = {products};
