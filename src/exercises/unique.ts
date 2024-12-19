import { Equal, Expect } from 'type-testing';

// difficulty: hard 5
// tags: learning-arrays, generics-with-constraints, index-accessed, recursion, conditional-types, infer, distribution

/**
 * Update `Unique` so that it removes any duplicate numbers, strings in an
 * array.
 */

type Unique<TInput, TOutput> = unknown;

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
];
