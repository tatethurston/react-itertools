import { ReactNode } from "react";
import { each } from "../each";
import { Options } from "../options";

export function find(
  children: ReactNode | ReactNode[],
  fn: (element: ReactNode, idx: number) => boolean,
  options: Options = {}
): ReactNode | undefined {
  let found;
  each(
    children,
    (el, idx) => {
      if (fn(el, idx)) {
        found = el;
        return true;
      }
      return false;
    },
    options
  );

  return found;
}
