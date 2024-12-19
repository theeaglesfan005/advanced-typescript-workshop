import { Equal, Expect, NotEqual } from 'type-testing';

// Check me
// difficulty: hard 5
// tags: index-accessed, conditional-types, learning-arrays, recursion

/**
 * Update the type `Path` so that it represents validates a possible path of a
 * tree under the form of an array.
 */

type Path<T> = unknown;

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
