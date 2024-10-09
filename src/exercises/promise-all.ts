// difficulty: medium
// tags: utility-types, learning-generics, generics-with-constraints, mapped-types, learning-arrays

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md

// Medium

// Utility Types, Map Types

// Hint: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types

import { Expect, Equal } from "type-testing";

declare function promiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: Awaited<T[P]>;
  //   [P in keyof T]: T[P] extends Promise<infer K> ? K : T[P]// <-- doesn't work since the last test case requires unwrapping nested promises
}>;

const promiseAllTest1 = promiseAll([1, 2, 3] as const);
const promiseAllTest2 = promiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = promiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = promiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];
