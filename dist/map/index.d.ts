import { ReactNode } from "react";
import { Options } from "../options";
declare type MapReturn<T, C> = C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
export declare function map<T, C extends ReactNode>(children: C | C[], fn: (element: ReactNode) => T, options?: Omit<Options, "visit">): MapReturn<T, C>;
export {};
