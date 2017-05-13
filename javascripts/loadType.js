"use strict";

console.log("Do we have types?");
let types = require('./sampleProduct');

let parsedTypeData = [];


let types = () => {

    return new Promise( (resolve, reject) => {
        $.getJSON("types.json", function(TypeData){
            parsedTypeData = TypeData;
            resolve();
        }).fail(function(arg1, arg2, arg3){
            reject(new Error("Types Jason did not load....Jason was a typo but I like it, so it stays", arg2, arg3));
        });
    });
};

module.exports = {types};
