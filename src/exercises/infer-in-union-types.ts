// difficulty: easy
// tags: conditional-types, distribution

// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/04-conditional-types-and-infer/27-infer-in-union-types.solution.2.ts

import { Equal, Expect } from 'type-testing';

const parser1 = {
  parse: () => 1,
};

const parser2 = () => '123';

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
