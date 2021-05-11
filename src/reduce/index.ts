import { ReactNode } from "react";
import { each } from "../each";
import { Options } from "../options";

export function reduce<T>(
  children: ReactNode | ReactNode[],
  fn: (accumulator: T, element: ReactNode, idx: number) => T,
  initialValue: T,
  options: Options = {}
): T {
  const accumulated = initialValue;
  each(
    children,
    (el, idx) => {
      fn(accumulated, el, idx);
      return true;
    },
    options
  );
  return accumulated;
}
