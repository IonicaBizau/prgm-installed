"use strict";

const prgmInstalled = require("../lib");

console.log(prgmInstalled("vim"));
// => true

prgmInstalled("vim", isInstalled => {
    console.log(isInstalled);
    // => true
});
