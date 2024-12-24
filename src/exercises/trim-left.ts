import { Equal, Expect } from 'type-testing';

// Check me
// difficulty: medium 2/3
// tags: recursion, conditional-types, infer, template-literals, distribution

/**
 * Update `TrimLeft` which takes an exact string type and returns a new string
 * with the whitespace beginning removed.
 */

type TrimLeft<TStr> = unknown;

type cases = [
  Expect<Equal<TrimLeft<'  Hello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\tHello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\nHello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\n\tHello World  '>, 'Hello World  '>>,
  Expect<Equal<TrimLeft<'\n\t         Hello World  '>, 'Hello World  '>>,
];
