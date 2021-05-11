import { ReactNode } from "react";
import { Options } from "../options";
import { reduce } from "../reduce";

export function groupBy<Key extends string>(
  children: ReactNode | ReactNode[],
  fn: (element: ReactNode, idx: number) => Key,
  options: Options = {}
): Record<Key, ReactNode[] | undefined> {
  return reduce<Record<string, ReactNode[] | undefined>>(
    children,
    (acc, current, idx) => {
      const key = fn(current, idx);
      const res = acc[key];
      if (res) {
        res.push(current);
      } else {
        acc[key] = [current];
      }
      return acc;
    },
    {},
    options
  );
}
