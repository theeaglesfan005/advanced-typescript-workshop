import { Equal, Expect } from 'type-testing';

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md

// complexity: 10
// tags: learning-arrays, generics-with-constraints, index-accessed, recursion, conditional-types, infer, distribution

// Update `Unique` so that it removes any duplicate numbers, strings, unknowns,
// any's, or nevers in an array.
//
// Hint: you need to use `Equal` from `type-testing` to check for equalities.

type Includes<T, U> = U extends [infer F, ...infer Rest]
  ? Equal<F, T> extends true
    ? true
    : Includes<T, Rest>
  : false;

type Unique<TInput extends any[], TOutput extends any[] = []> = TInput extends []
  ? TOutput
  : TInput extends [infer Head, ...infer Rest]
    ? Includes<Head, TOutput> extends true
      ? Unique<Rest, TOutput>
      : Unique<Rest, [...TOutput, Head]>
    : never;

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
];
