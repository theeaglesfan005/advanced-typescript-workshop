import { Expect, Equal } from 'type-testing';

// difficulty: medium 3/4
// tags: utility-types, learning-generics, generics-with-constraints, mapped-types, learning-arrays

// TODO: add notes on Awaited as a hint
/**
 * Type the function `PromiseAll` that accepts an array of PromiseLike objects,
 * the returning value should be Promise<T> where T is the resolved result
 * array.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
 */

declare function promiseAll<T>(values: unknown): Promise<unknown>;

const promiseAllTest1 = promiseAll([1, 2, 3] as const);
const promiseAllTest2 = promiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = promiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = promiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
];
