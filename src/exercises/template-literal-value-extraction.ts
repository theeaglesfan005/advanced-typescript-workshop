// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/04-conditional-types-and-infer/25-template-literal-value-extraction.solution.1.ts

// TAGS: easy, template literal types, conditional types, infer

import { Equal, Expect } from "type-testing";

type GetSurname<T> = T extends `${string} ${infer Last}` ? Last : never;

type tests = [
  Expect<Equal<GetSurname<"Matt Pocock">, "Pocock">>,
  Expect<Equal<GetSurname<"Jimi Hendrix">, "Hendrix">>,
  Expect<Equal<GetSurname<"Eric Clapton">, "Clapton">>,
  Expect<Equal<GetSurname<"John Mayer">, "Mayer">>,
  Expect<Equal<GetSurname<"BB King">, "King">>
];
