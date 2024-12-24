import { Expect, Equal } from 'type-testing';

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/test-cases.ts

// complexity: 6
// tags: conditional-types, index-accessed

// Update `AnyOf` to implement a Python-like any function in the type system. A
// type takes the Array and returns true if any element of the Array is true. If
// the Array is empty, return false.

type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | { [key: string]: never } | null | undefined
  ? false
  : true;

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
];
