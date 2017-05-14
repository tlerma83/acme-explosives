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
