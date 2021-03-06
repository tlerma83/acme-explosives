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
