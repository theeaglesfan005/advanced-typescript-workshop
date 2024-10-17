import { Equal, Expect } from 'type-testing';

// difficulty: easy
// tags: conditional-types, infer, template-literals

/**
 * Update `GetSurname` so that it returns the surname of a string assuming
 * there's only a given name and surname.
 */

type GetSurname<T> = unknown;

type cases = [
  Expect<Equal<GetSurname<'Matt Pocock'>, 'Pocock'>>,
  Expect<Equal<GetSurname<'Jimi Hendrix'>, 'Hendrix'>>,
  Expect<Equal<GetSurname<'Eric Clapton'>, 'Clapton'>>,
  Expect<Equal<GetSurname<'John Mayer'>, 'Mayer'>>,
  Expect<Equal<GetSurname<'BB King'>, 'King'>>,
];
