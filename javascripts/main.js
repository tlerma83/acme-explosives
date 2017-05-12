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
