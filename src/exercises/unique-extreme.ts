import { Equal, Expect } from 'type-testing';

// difficulty: extreme
// tags: learning-arrays, generics-with-constraints, index-accessed, recursion, conditional-types, infer, distribution

/**
 * Update `Unique` so that it removes any duplicate numbers, strings, unknowns,
 * any's, or nevers in an array.
 *
 * Hint: you need to use `Equal` from `type-testing` to check for equalities.
 */

type Unique<TInput, TOutput> = unknown;

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
];
