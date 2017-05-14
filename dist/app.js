(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


let products = () => {
    return new Promise ( (resolve, reject) =>{

        $.getJSON("products.json", function(productData){
            resolve(productData.products[0]);

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
let prodDataObj;

let outputDiv = $("#output");

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
        prodDataObj = prodData;
        console.log("data has successfully loaded");
        dropDownEvent();
    }
).catch(function(error){
    console.log(error);
});




function dropDownEvent (argumentDataVar) {

    $("#drop-down-change a").click((event) => {

        let whatCatClicked = event.target.innerText;
        if (whatCatClicked === "Fireworks") {
            console.log("You are an asshole who picked fireworks");
            categoryFunction(0);

        } else if (whatCatClicked === "Demolition") {
            console.log("You are an asshole who click demolition");
            categoryFunction(1);
        }

    });
}

function categoryFunction (indexVal) {
    var catgories = catDataArray[indexVal];

//loop through typeDataArray which will bring back 6 objects. Within those objects are keyvalue pairs
    for (let i = 0; i < typeDataArray.length; i++) {
        //types holds my objects
            let types = typeDataArray[i];


// if category 0 then should match types.category...if not it will loop back through until it has a match
        if (indexVal === types.category) {
            console.log("looking for a match");


//get product keys and set to a variable
            for (var objects1 in prodDataObj) {
                let products = prodDataObj[objects1];


//hard part , if products.type(which is the type key in the products JSON) is equal to the types.id(which is the id key in types JSON) then we have a match
                if (products.type === types.id) {
                    console.log("You picked: " + " " + catgories.name + " " + types.name + " " + types.description + " " + products.name + " " + products.description);
                    let productCards = `<div class="bootstrap-crap">
                                        <h3>${catgories.name}</h3>
                                        <h5>${products.name}</h5>
                                        <p>${types.name} use</p>
                                        <p>${types.description}</p>
                                        <p>${products.description}</p>
                                        </div>`;
                    $("#output").append(productCards);
                }
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
