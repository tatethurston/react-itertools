"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
const each_1 = require("../each");
function reduce(children, fn, initialValue, options = {}) {
    const accumulated = initialValue;
    each_1.each(children, (el, idx) => {
        fn(accumulated, el, idx);
        return true;
    }, options);
    return accumulated;
}
exports.reduce = reduce;
