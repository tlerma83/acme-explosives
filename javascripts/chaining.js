"use strict";

console.log("testing chaining.js");

catPromise().then(
    () => {
        typePromise();
    },
    () => {
        console.log("This should be my rejected Promise for something, not sure if it is for catPromise or typePromise");
    }
).then (
    () => {
      productPromise();
    },
    () => {
        console.log("this is also an error message for an unknown event at this point in time. Damnit Jason");
    }
).then (
    () => {
        
    },
    () => {

    }
);

