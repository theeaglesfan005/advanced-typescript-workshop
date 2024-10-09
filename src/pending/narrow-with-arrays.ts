// difficulty: medium
// tags: utility-types, generics-with-constraints, index-accessed, learning-generics, learning-arrays

// source: https://github.com/total-typescript/advanced-patterns-workshop/blob/main/src/07-challenges/32-narrow-with-arrays.solution.ts

// TODO:

import { Equal, Expect } from "type-testing";

interface Fruit {
  name: string;
  price: number;
}

type WrapFruit = (fruits: never) => {
  getFruit: (name: never) => never;
};

declare var wrapFruit1: WrapFruit;

const fruits1 = wrapFruit1([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
]);

fruits1.getFruit("apple"); // should be {name: 'apple', price: 1}

export const wrapFruit = <const TFruits extends readonly Fruit[]>(fruits: TFruits) => {
  const getFruit = <TName extends TFruits[number]["name"]>(name: TName) => {
    return fruits.find((fruit) => fruit.name === name) as Extract<TFruits[number], { name: TName }>;
  };

  return {
    getFruit,
  };
};

const fruits = wrapFruit([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
]);

const banana = fruits.getFruit("banana");
const apple = fruits.getFruit("apple");
// @ts-expect-error
const notAllowed = fruits.getFruit("not-allowed");

type cases = [
  Expect<Equal<typeof apple, { readonly name: "apple"; readonly price: 1 }>>,
  Expect<Equal<typeof banana, { readonly name: "banana"; readonly price: 2 }>>
];
