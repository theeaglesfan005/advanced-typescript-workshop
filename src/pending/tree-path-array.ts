// difficulty: hard
// tags:  index-accessed, conditional-types, learning-arrays, recursion

import { Equal, Expect } from "type-testing";

// Create a type Path that represents validates a possible path of a tree under the form of an array.

declare const example: {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};

type Path<T> = T extends Record<PropertyKey, unknown>
  ? {
      [P in keyof T]: [P, ...Path<T[P]>] | [P];
    }[keyof T]
  : never;

type A = Path<typeof example>;

type cases = []; //   Expect<Equal<Path<(typeof example)["foo"]["bar"], ["a"]>>>
//   ExpectTrue<ExpectExtends<Path<(typeof example)["foo"]["bar"]>, ["a"]>>,
//   ExpectTrue<ExpectExtends<Path<(typeof example)["foo"]["baz"]>, ["b"] | ["c"]>>,
//   ExpectTrue<
//     ExpectExtends<Path<(typeof example)["foo"]>, ["bar"] | ["baz"] | ["bar", "a"] | ["baz", "b"] | ["baz", "c"]>
//   >,
//   ExpectFalse<ExpectExtends<Path<(typeof example)["foo"]["bar"]>, ["z"]>>];];
