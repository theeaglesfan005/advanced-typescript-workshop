import { Equal, Expect, NotEqual } from 'type-testing';

// difficulty: hard
// tags: index-accessed, conditional-types, learning-arrays, recursion

/**
 * Update the type `Path` so that it represents validates a possible path of a
 * tree under the form of an array.
 */

type Path<T> =
  T extends Record<PropertyKey, unknown>
    ? {
        [P in keyof T]: [P, ...Path<T[P]>] | [P];
      }[keyof T]
    : never;

type Example = {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};

type cases = [
  Expect<Equal<Path<Example['foo']['bar']>, ['a']>>,
  Expect<Equal<Path<Example['foo']['baz']>, ['b'] | ['c']>>,
  Expect<Equal<Path<Example['foo']>, ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']>>,
  Expect<NotEqual<Path<Example['foo']['bar']>, ['z']>>,
];
