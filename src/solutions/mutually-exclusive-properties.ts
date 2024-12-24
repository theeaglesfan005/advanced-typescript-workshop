import { Equal, Expect } from 'type-testing';

// sources: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/06-challenges/38-mutually-exclusive-properties.solution.ts

// complexity: 4
// tags: mapped-types, index-accessed

// Update `MutuallyExclusive` so that it unions an separate object type for
// each property of a single object.

interface Attributes {
  id: string;
  email: string;
  username: string;
}

type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type cases = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >,
];
