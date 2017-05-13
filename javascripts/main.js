"use strict";
console.log("how we doing?");

let products = require('./loadProduct');
//let parsedCatData = [];
//let parsedTypeData = [];
//let parsedProductData = [];
//
//let categories = function(){
//    return new Promise( (resolve, reject) =>{
//        $.getJSON("categories.json", function(CatData){
//            parsedCatData = CatData;
//            console.log(parsedCatData.categories);
//            resolve();
//        }).fail(function(arg1, arg2, arg3){
//            reject(new Error("did not load man", arg2, arg3));
//        });
//
//    });
//};
//
//
//
//let types = () => {
//
//    return new Promise( (resolve, reject) => {
//        $.getJSON("types.json", function(TypeData){
//            parsedTypeData = TypeData;
//            resolve();
//        }).fail(function(arg1, arg2, arg3){
//            reject(new Error("Types Jason did not load....Jason was a typo but I like it, so it stays", arg2, arg3));
//        });
//    });
//};
//
//
//
//let products = () => {
//    return new Promise ( (resolve, reject) =>{
//        $.getJSON("products.json", function(ProductData){
//            parsedProductData = ProductData;
//            resolve();
//        }).fail(function(arg1, arg2, arg3){
//            reject(new Error("Product Jason did not load", arg2, arg3));
//        });
//    });
//};


categories().then(types).then(products).then(function(){
    console.log("data has successfully loaded", parsedProductData);
    dropDownEvent();
}).catch(function(error){
    console.log(error);
});



function dropDownEvent () {
    $("#drop-down-change a").click((event) => {
    //    console.log("what is clicked", event.target.innerText);
        let whatCatClicked = event.target.innerText;
        if (whatCatClicked === "Fireworks") {
            console.log("You are an asshole who picked fireworks");
            console.log(parsedCatData);
        } else if (whatCatClicked === "Demolition") {
            console.log("You are an asshole who click demolition");
        }

    });
}
