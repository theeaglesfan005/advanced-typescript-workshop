import { Expect, Equal } from 'type-testing';

// complexity: 6
// tags: mapped-types, key-remapping, conditional-types, index-accessed, distribution

// Update `OmitByType` so that it is a variation of the `Omit` utility type
// that allows omitting properties of an object type based on types.
//
// Hint: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

type OmitByType<T, U> = unknown;

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
