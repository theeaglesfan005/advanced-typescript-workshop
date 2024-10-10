// difficulty: hard
// tags: utility-types, learning-arrays, conditional-types, infer, recursion, generics-with-constraints

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md

import { Expect, Equal } from 'type-testing';

//  Conditional Types, Recursion

type FlipArray<T extends any[]> = T extends [infer Head, ...infer Rest] ? [...FlipArray<Rest>, Head] : [];
type FlipArguments<T extends (...args: any) => any> = (...args: [...FlipArray<Parameters<T>>]) => ReturnType<T>;

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
];

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
];
