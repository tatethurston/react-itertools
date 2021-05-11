"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const map_1 = require("../map");
function filter(children, fn, options = {}) {
    return map_1.map(children, (el) => {
        if (fn(el)) {
            return el;
        }
        return null;
    }, options);
}
exports.filter = filter;
