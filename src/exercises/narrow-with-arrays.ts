import { Equal, Expect } from 'type-testing';

// source: https://github.com/total-typescript/advanced-patterns-workshop/blob/main/src/07-challenges/32-narrow-with-arrays.solution.ts

// difficulty: medium 3
// tags: utility-types, generics-with-constraints, index-accessed, learning-generics, learning-arrays

/**
 * Update the type for `WrapFruit` so that the `getFruit` function takes in a
 * `name` argument and returns the object from the array used.
 */

interface Fruit {
  name: string;
  price: number;
}

type WrapFruit = (fruits: never) => {
  getFruit: (name: never) => never;
};

declare var wrapFruit: WrapFruit;

const fruits = wrapFruit([
  {
    name: 'apple',
    price: 1,
  },
  {
    name: 'banana',
    price: 2,
  },
] as const);

const banana = fruits.getFruit('banana');
const apple = fruits.getFruit('apple');
// @ts-expect-error
const notAllowed = fruits.getFruit('not-allowed');

type cases = [
  Expect<Equal<typeof apple, { readonly name: 'apple'; readonly price: 1 }>>,
  Expect<Equal<typeof banana, { readonly name: 'banana'; readonly price: 2 }>>,
];
