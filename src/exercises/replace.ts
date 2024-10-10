// difficulty: hard
// tags: generics-with-constraints, conditional-types, template-literals, infer

// source: https://typehero.dev/challenge/replace/solutions/287

import { Expect, Equal } from 'type-testing';

type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${Right}`
    : S;

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
];
