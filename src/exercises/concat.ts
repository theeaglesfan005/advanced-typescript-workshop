import { Equal, Expect } from "type-testing";

// TAGS: easy, generics, generic-with-constraints, array, spread
// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

type Concat<A1 extends any[], A2 extends any[]> = [...A1, ...A2];

type cases = [Expect<Equal<Concat<[1], [2]>, [1, 2]>>];
