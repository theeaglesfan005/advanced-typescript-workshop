// difficulty: easy
// tags: conditional-types, index-accessed, generics-with-constraints

// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/04-conditional-types-and-infer/23-infer-with-raw-values.solution.1.ts

import { Equal, Expect } from "type-testing";

type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

type cases = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
