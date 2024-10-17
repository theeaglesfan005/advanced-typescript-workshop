import { Expect, Equal } from 'type-testing';

// source: https://typehero.dev/challenge/exclude/solutions/148

// difficulty: easy
// tags: utility-types, conditional-types, distribution

/**
 * Implement the built-in Exclude<T, U>
 *
 * Exclude from T those types that are assignable to U
 */

type MyExclude<T, U> = T extends U ? never : T;

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];
