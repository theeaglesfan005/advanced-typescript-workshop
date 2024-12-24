import { Equal, Expect } from 'type-testing';

// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/04-conditional-types-and-infer/25-template-literal-value-extraction.solution.1.ts

// complexity: 2
// tags: conditional-types, infer, template-literals

// Update `GetSurname` so that it returns the surname of a string assuming
// there's only a given name and surname.

type GetSurname<T> = T extends `${string} ${infer Last}` ? Last : never;

type cases = [
  Expect<Equal<GetSurname<'Matt Pocock'>, 'Pocock'>>,
  Expect<Equal<GetSurname<'Jimi Hendrix'>, 'Hendrix'>>,
  Expect<Equal<GetSurname<'Eric Clapton'>, 'Clapton'>>,
  Expect<Equal<GetSurname<'John Mayer'>, 'Mayer'>>,
  Expect<Equal<GetSurname<'BB King'>, 'King'>>,
];
