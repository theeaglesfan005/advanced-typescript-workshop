// source: https://timdeschryver.dev/bits/pretty-typescript-types

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
