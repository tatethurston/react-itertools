"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.each = void 0;
const react_1 = require("react");
function each(children, fn, options = {}) {
    const breadthFirst = options["visit"] === "breadthFirst";
    const maxDepth = options["maxDepth"] ?? -1;
    const queue = [];
    react_1.Children.forEach(children, (el) => queue.push([el, depth]));
    const scheduler = breadthFirst
        ? (el, depth) => queue.push([el, depth])
        : (el, depth) => queue.unshift([el, depth]);
    let current;
    let idx = 0;
    const depth = 0;
    while ((current = queue.shift())) {
        const [element, depth] = current;
        const stop = fn(element, idx++);
        if (stop) {
            return;
        }
        if (depth === maxDepth) {
            break;
        }
        if (react_1.isValidElement(element) && element.props.children) {
            react_1.Children.forEach(element.props.children, (el) => scheduler(el, depth + 1));
        }
    }
}
exports.each = each;
