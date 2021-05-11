"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const react_1 = require("react");
function _map(children, fn, maxDepth, depth) {
    return react_1.Children.map(children, (child) => {
        if (react_1.isValidElement(child) && child.props.children && depth !== maxDepth) {
            child = react_1.cloneElement(child, {
                children: _map(child.props.children, fn, maxDepth, depth + 1),
            });
        }
        return fn(child);
    });
}
function map(children, fn, options = {}) {
    const maxDepth = options["maxDepth"] ?? -1;
    return _map(children, fn, maxDepth, 0);
}
exports.map = map;
