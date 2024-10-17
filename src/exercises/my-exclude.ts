import { Expect, Equal } from 'type-testing';

// difficulty: easy
// tags: utility-types, conditional-types, distribution

/**
 * Implement the built-in Exclude<T, U>
 *
 * Exclude from T those types that are assignable to U
 */

type MyExclude<T, U> = unknown;

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];
