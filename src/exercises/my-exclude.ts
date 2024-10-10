// difficulty: easy
// tags: utility-types, conditional-types, distribution

// https://typehero.dev/challenge/exclude/solutions/148

import { Expect, Equal } from 'type-testing';

type MyExclude<T, U> = T extends U ? never : T;

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];
