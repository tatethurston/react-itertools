import { map } from "../map";
import { ReactNode } from "react";
import { Options } from "../options";

export function filter<C extends ReactNode>(
  children: C | C[],
  fn: (element: ReactNode) => boolean,
  options: Options = {}
): ReactNode[] {
  return map(
    children,
    (el) => {
      if (fn(el)) {
        return el;
      }
      return null;
    },
    options
  ) as ReactNode[];
}
