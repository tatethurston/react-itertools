import { Children, isValidElement, ReactNode } from "react";
import { Options } from "../options";

export function each(
  children: ReactNode | ReactNode[],
  fn: (element: ReactNode, idx: number) => boolean,
  options: Options = {}
): void {
  const breadthFirst = options["visit"] === "breadthFirst";
  const maxDepth = options["maxDepth"] ?? -1;
  const queue: [ReactNode, number][] = [];
  Children.forEach(children, (el) => queue.push([el, depth]));
  const scheduler = breadthFirst
    ? (el: ReactNode, depth: number) => queue.push([el, depth])
    : (el: ReactNode, depth: number) => queue.unshift([el, depth]);
  let current: [ReactNode, number] | undefined;
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (isValidElement(element) && element.props.children) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      Children.forEach(element.props.children, (el) =>
        scheduler(el, depth + 1)
      );
    }
  }
}
