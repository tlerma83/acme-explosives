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
