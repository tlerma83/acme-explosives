(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log("is cat loading to the page?");


var Fireworks = (function(myfire){
    let categoryArray = [];

    myfire.loadCatsJson = function () {
        $.getJSON("categories.json", function(parsedCategoriesJsonData){
            categoryArray = parsedCategoriesJsonData.categories;

            for (let i = 0; i < categoryArray.length; i++) {

                let categoryHTML = `<div class="products">
                <h3>${categoryArray[i].name}</h3>
                </div>`;
                $("#output").append(categoryHTML);
            }

        }).fail(function(httpRequest, textErrorMsg, errorCodeObj){
            console.log("not happening on loadCat.js", textErrorMsg, errorCodeObj);
        });
    };
    return myfire;
})(Fireworks || {});
Fireworks.loadCatsJson();

},{}],2:[function(require,module,exports){
"use strict";

console.log("Do we have products?");

var productPromise = new Promise ( (resolve, reject) =>{
    $.getJSON("products.json", function(parsedProductData){
        resolve(parsedProductData);
    }).fail(function(arg1, arg2, arg3){
        reject(new Error("Product Jason did not load", arg2, arg3));
    });
});

},{}],3:[function(require,module,exports){
"use strict";

console.log("Do we have types?");

var typePromise = new Promise( (resolve, reject) => {
    $.getJSON("types.json", function(parsedTypeData){
        resolve(parsedTypeData);
    }).fail(function(arg1, arg2, arg3){
        reject(new Error("Types Jason did not load....Jason was a typo but I like it, so it stays", arg2, arg3));
    });
});

},{}],4:[function(require,module,exports){
"use strict";
console.log("how we doing?");


$("#drop-down-change a").click((event) => {
//    console.log("what is clicked", event.target.innerText);
    let whatCatClicked = event.target.innerText;
    if (whatCatClicked === "Fireworks") {
        console.log("You are an asshole who picked fireworks");
    } else if (whatCatClicked === "Demolition") {
        console.log("You are an asshole who click demolition");
    }

});

},{}],5:[function(require,module,exports){
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

















},{}]},{},[1,2,3,4,5]);
