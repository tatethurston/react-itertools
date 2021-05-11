"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const reduce_1 = require("../reduce");
function groupBy(children, fn, options = {}) {
    return reduce_1.reduce(children, (acc, current, idx) => {
        const key = fn(current, idx);
        const res = acc[key];
        if (res) {
            res.push(current);
        }
        else {
            acc[key] = [current];
        }
        return acc;
    }, {}, options);
}
exports.groupBy = groupBy;
