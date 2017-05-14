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

