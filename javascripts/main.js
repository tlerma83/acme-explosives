"use strict";

require("bootstrap");

let requireCats = require('./sampleProduct');
let requireTypes = require('./loadType');
let requireProds = require('./loadProduct');
let catDataArray;
let typeDataArray;
let prodDataObj;


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
        dropDownEvent();
    }
).catch(function(error){
    console.log(error);
});




function dropDownEvent () {

    $(".dropdown-menu a").click((event) => {
        $("#outSomeStuff").html("");
        let whatCatClicked = event.target.innerText;

        console.log(whatCatClicked);
        if (whatCatClicked === "FireWorks") {
            console.log("You are an asshole who picked fireworks");
            categoryFunction(0);

        } else if (whatCatClicked === "Demolition") {
            console.log("You are an asshole who click demolition");
            categoryFunction(1);
        }

    });
}

//1. "for loop" ...loop through typeDataArray which will bring back 6 objects. Within those objects are keyvalue pairs
//2. "if"  if category 0 then should match types.category...if not it will loop back through until it has a match
//3. "for in"   get product keys and set to a variable
//4. "last if"  hard part , if products.type(which is the type key in the products JSON) is equal to the types.id(which is the id key in types JSON) then we have a match


function categoryFunction (indexVal) {
    var catgories = catDataArray[indexVal];
    for (let i = 0; i < typeDataArray.length; i++) {
        //types holds my objects
        let types = typeDataArray[i];

        if (indexVal === types.category) {

            for (var objects1 in prodDataObj) {
                let products = prodDataObj[objects1];

                if (products.type === types.id) {
                    let productCards = `<div class="col-md-4 cards">
                                        <h3>${catgories.name}</h3>
                                        <h5>${products.name}</h5>
                                        <p>${types.name} use</p>
                                        <p>${types.description}</p>
                                        <p>${products.description}</p>
                                        </div>`;

                    $("#outSomeStuff").append(productCards);
                }
            }
        }

    }

}

