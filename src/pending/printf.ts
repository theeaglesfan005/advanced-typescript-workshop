// difficulty: hard
// tags: todo

// source: https://github.com/type-challenges/type-challenges/tree/main/questions/00545-hard-printf

// Maybe use this instead?
// sources: https://github.com/type-challenges/type-challenges/blob/main/questions/00147-hard-c-printf-parser/test-cases.ts (we want to do this)

// Medium

// Recursion, Template Literals,

import { Expect, Equal } from 'type-testing';

// type MapDict = {
//     s: string;
//     d: number;
// };

// type Format<T extends string> = T extends `${string}%${infer M}${infer R}`
//     ? M extends keyof MapDict
//         ? (x: MapDict[M]) => Format<R>
//         : Format<R>
//     : string;

// TODO: include f?
type FormatType = { s: string; d: number; f: number /*, ...*/ };

type Format<T extends string> = T extends `${string}%${infer S}${infer R}`
  ? S extends keyof FormatType
    ? (arg: FormatType[S]) => Format<R>
    : Format<R>
  : string;

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%%dbc'>, string>>,
  Expect<Equal<Format<'a%%%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>,
];

// https://www.geeksforgeeks.org/printf-in-c/
