"use strict";

const which = require("which");

/**
 * prgmInstalled
 * Check if a program is available on the system.
 *
 * @name prgmInstalled
 * @function
 * @param {String} name The executable name.
 * @param {Function} fn The callback function.
 * @return {Number} Return description.
 */
module.exports = function prgmInstalled (name, fn) {

    if (fn) {
        return which(name, (err, installed) => {
            if (err) {
                installed = false;
            }
            fn(!!installed, installed);
        });
    }

    try {
        return !!which.sync(name);
    } catch (e) {
        return false;
    }
};
