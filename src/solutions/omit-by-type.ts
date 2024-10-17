import { Expect, Equal } from 'type-testing';

// source: https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md

// difficulty: hard
// tags: mapped-types, key-remapping, conditional-types, index-accessed, distribution

/**
 * Update `OmitByType` so that it is a variation of the `Omit` utility type
 * that allows omitting properties of an object type based on types.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 */

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
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
];
