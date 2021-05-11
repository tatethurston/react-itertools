"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const react_1 = require("react");
function _map(children, fn, maxDepth, depth) {
    return react_1.Children.map(children, (child) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (react_1.isValidElement(child) && child.props.children && depth !== maxDepth) {
            child = react_1.cloneElement(child, {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                children: _map(child.props.children, fn, maxDepth, depth + 1),
            });
        }
        return fn(child);
    });
}
/**
 * Recursively iterates through all `children` and returns the transformed result of applying `fn` to each child.
 *
 * Recurses depth first, post-order.
 *
 * @param children - the React children.
 * @param fn - the function that will be applied to every child element.
 * @param options - {@link Options}
 *
 */
function map(children, fn, options = {}) {
    const maxDepth = options["maxDepth"] ?? -1;
    return _map(children, fn, maxDepth, 0);
}
exports.map = map;
