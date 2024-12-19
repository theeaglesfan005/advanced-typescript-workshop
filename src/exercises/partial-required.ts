import { Expect, Equal } from 'type-testing';
import { Prettify } from '../prettify';

// Check me
// difficulty: medium 3/4
// tags: utility-types, learning-generics, generics-with-constraints

/**
 * Turns out the backend types are unreliable some properties are optional.
 *
 * Update `PartialRequired` so that it is a variation of `Partial` that can
 * accepts a union of string literals.
 */

type PartialRequired<T, Keys extends keyof T> = unknown;

type cases = [
  Expect<Equal<Prettify<PartialRequired<{ moo?: string }, 'moo'>>, { moo: string }>>,
  Expect<
    Equal<
      Prettify<PartialRequired<{ id?: string; userName?: string; password?: string }, 'id' | 'userName'>>,
      { id: string; userName: string; password?: string }
    >
  >,
];
