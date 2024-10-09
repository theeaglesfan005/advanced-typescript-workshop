// difficulty: hard
// tags: mapped-types, key-remapping, conditional-types, index-accessed, distribution

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md

// Hint: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

import { Expect, Equal } from "type-testing";

// type OmitByType<T, U> = {
//     [key in keyof T as T[key] extends U ? never : key]: T[key];
// };

type OmitByType<T, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key];
};

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>
];
