import { Expect, Equal } from 'type-testing';
import { Prettify } from '../prettify';

// difficulty: medium
// tags: utility-types, learning-generics, generics-with-constraints

/**
 * Turns out the backend types are unreliable some properties are optional.
 *
 * Create a variation of `Partial` that can accepts a union of string literals.
 */

type PartialRequired<T, Keys extends keyof T> = Required<Pick<T, Keys>> & Omit<T, Keys>;
// type PartialRequired<T, Keys extends keyof T> = Required<Pick<T, Keys>> & Omit<T, Keys>;

type cases = [
  Expect<
    Equal<
      Prettify<PartialRequired<{ id?: string; userName?: string; password?: string }, 'id' | 'userName'>>,
      { id: string; userName: string; password?: string }
    >
  >,
];
