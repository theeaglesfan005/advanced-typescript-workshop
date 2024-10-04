// source: https://typehero.dev/challenge/startswith/solutions/2248

// easy

// template literals, generic constraints, conditional types

import { Expect, Equal } from "type-testing";

type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]
