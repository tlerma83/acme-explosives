(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";


let types = () => {

    return new Promise( (resolve, reject) => {

        $.getJSON("types.json", function(typeData){
            resolve(typeData.types);

        }).fail(function(arg1, arg2, arg3){
            reject(new Error("Types Jason did not load....Jason was a typo but I like it, so it stays", arg2, arg3));
        });
    });
};

module.exports = {types};

},{}],3:[function(require,module,exports){
"use strict";
console.log("how we doing?");

let requireCats = require('./sampleProduct');
let requireTypes = require('./loadType');
let requireProds = require('./loadProduct');

let catDataArray;
let typeDataArray;
let prodDataArray;


requireCats.categories().then (
    (catData) => {
       catDataArray = catData;
        return requireTypes.types();
    }
).then(
    (typeData) => {
        typeDataArray = typeData;
        return requireProds.products();
    }
).then(
    (prodData) => {
        prodDataArray = prodData;
        console.log("data has successfully loaded");
        dropDownEvent();
        //same as passing prodData at this point
    }
).catch(function(error){
    console.log(error);
});




function dropDownEvent (argumentDataVar) {

    $("#drop-down-change a").click((event) => {

        let whatCatClicked = event.target.innerText;
        if (whatCatClicked === "Fireworks") {
            console.log("You are an asshole who picked fireworks");
            categoryFunction(catDataArray[0]);

        } else if (whatCatClicked === "Demolition") {
            console.log("You are an asshole who click demolition");
            categoryFunction(catDataArray[1]);
        }

    });
}

function categoryFunction (indexVal) {
    console.log(indexVal, "this should be either fireworks or demolition");
    if (indexVal.id === 0) {
        console.log("Fireworks cat chosen now log typeDataArray", typeDataArray);
        for (var objects1 in typeDataArray) {
            let holdtypeObj = typeDataArray[objects1];
            console.log(holdtypeObj);
            if (holdtypeObj.category === 0) {
                console.log("now how to link?");
            }
        }

    } else if (indexVal.id === 1) {
        console.log("demo cat chosen now log typeDataArray");
        for (var objects2 in typeDataArray) {
            let holdtypeObj = typeDataArray[objects2];
            console.log(holdtypeObj);
            if (holdtypeObj.category === 1) {
                console.log("now how to link? Also log out ids for types", typeDataArray[0].id);
            }
        }
    }
}

},{"./loadProduct":1,"./loadType":2,"./sampleProduct":4}],4:[function(require,module,exports){
"use strict";


let categories = function(){

    return new Promise( (resolve, reject) =>{

        $.getJSON("categories.json", function(catData){
            resolve(catData.categories);

        }).fail(function(arg1, arg2, arg3){
            reject(new Error("did not load man, sampleProduct.js", arg2, arg3));
        });

    });
};

module.exports = {categories};

},{}]},{},[1,2,3,4]);
