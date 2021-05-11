"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const each_1 = require("../each");
function find(children, fn, options = {}) {
    let found;
    each_1.each(children, (el, idx) => {
        if (fn(el, idx)) {
            found = el;
            return true;
        }
        return false;
    }, options);
    return found;
}
exports.find = find;
