// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/04-conditional-types-and-infer/25-template-literal-value-extraction.solution.1.ts

// TODO: 

import { Equal, Expect } from "type-testing";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King",
];

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>,
];