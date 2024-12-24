import { Equal, Expect } from 'type-testing';

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md

// complexity: 4
// tags: recursion, conditional-types, infer, template-literals, distribution

// Update `TrimLeft` which takes an exact string type and returns a new string
// with the whitespace beginning removed.

type Space = ' ' | '\t' | '\n';

type TrimLeft<TStr> = TStr extends `${Space}${infer Rest}` ? TrimLeft<Rest> : TStr;

type cases = [
  Expect<Equal<TrimLeft<'  Hello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\tHello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\nHello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\n\tHello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\n\t         Hello World  '>, 'Hello World  '>>,
];
