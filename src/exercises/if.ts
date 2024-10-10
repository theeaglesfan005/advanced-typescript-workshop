// difficulty: easy
// tags: conditional-types, distribution, generics-with-constraints

// source: https://github.com/type-challenges/type-challenges/tree/main/questions/00268-easy-if

import { Expect, Equal } from "type-testing";

type If<C extends boolean, T, F> = C extends true ? T : F;

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>,
  Expect<Equal<If<boolean, "a", 2>, "a" | 2>>,
];

// @ts-expect-error
type error = If<null, "a", "b">;

type Length2<T extends any[]> = T extends { length: infer L } ? L : never;
type Length3<T extends { length: unknown }> = T["length"];

type test = Length3<{ length: 5 }>;
