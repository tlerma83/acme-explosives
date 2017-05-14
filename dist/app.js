(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//"use strict";
//console.log("is cat loading to the page?");
//
//
//var Fireworks = (function(myfire){
//    let categoryArray = [];
//
//    myfire.loadCatsJson = function () {
//        $.getJSON("categories.json", function(parsedCategoriesJsonData){
//            categoryArray = parsedCategoriesJsonData.categories;
//
//            for (let i = 0; i < categoryArray.length; i++) {
//
//                let categoryHTML = `<div class="products">
//                <h3>${categoryArray[i].name}</h3>
//                </div>`;
//                $("#output").append(categoryHTML);
//            }
//
//        }).fail(function(httpRequest, textErrorMsg, errorCodeObj){
//            console.log("not happening on loadCat.js", textErrorMsg, errorCodeObj);
//        });
//    };
//    return myfire;
//})(Fireworks || {});
//Fireworks.loadCatsJson();

},{}],2:[function(require,module,exports){
"use strict";

console.log("Do we have products?");

//require('./loadType');


//let parsedProductData = [];

let products = () => {
    return new Promise ( (resolve, reject) =>{
        $.getJSON("products.json", function(productData){
//            parsedProductData = ProductData;
            resolve(productData.products);
        }).fail(function(arg1, arg2, arg3){
            reject(new Error("Product Jason did not load", arg2, arg3));
        });
    });
};

module.exports = {products};

},{}],3:[function(require,module,exports){
"use strict";

console.log("Do we have types?");
require('./sampleProduct');

//let parsedTypeData = [];


let types = () => {

    return new Promise( (resolve, reject) => {
        $.getJSON("types.json", function(typeData){
//            parsedTypeData = TypeData;
            resolve(typeData.types);
        }).fail(function(arg1, arg2, arg3){
            reject(new Error("Types Jason did not load....Jason was a typo but I like it, so it stays", arg2, arg3));
        });
    });
};

module.exports = {types};

},{"./sampleProduct":5}],4:[function(require,module,exports){
"use strict";
console.log("how we doing?");

let requireCats = require('./sampleProduct');
let requireTypes = require('./loadType');
let requireProds = require('./loadProduct');

let catDataArray;
let typeDataArray;
let prodDataArray;



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


requireCats.categories().then (
    (catData) => {
       catDataArray = catData;
        requireTypes.types();
    }
).then(
    (typeData) => {
        typeDataArray = typeData;
        requireProds.products();
    }
).then(
    (prodData) => {
        prodDataArray = prodData;
        console.log("data has successfully loaded");
        dropDownEvent(prodDataArray);
        //same as passing prodData at this point
    }
).catch(function(error){
    console.log(error);
});




function dropDownEvent (argumentDataVar) {
    console.log("is there anything here yet?", argumentDataVar);
    $("#drop-down-change a").click((event) => {


    //    console.log("what is clicked", event.target.innerText);
        let whatCatClicked = event.target.innerText;
        if (whatCatClicked === "Fireworks") {
            console.log("You are an asshole who picked fireworks");
        } else if (whatCatClicked === "Demolition") {
            console.log("You are an asshole who click demolition");
        }

    });
}

},{"./loadProduct":2,"./loadType":3,"./sampleProduct":5}],5:[function(require,module,exports){
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

},{}]},{},[1,2,3,4,5]);
