// difficulty: medium
// tags: utility-types, learning-generics, generics-with-constraints

// TODO: add story about how backend endpoints cannot be trusted and include more cases

import { Expect, Equal } from "type-testing";
import { Prettify } from "../prettify";

type PartialRequired<T, Keys extends keyof T> = Required<Pick<T, Keys>> & Omit<T, Keys>;
// type PartialRequired<T, Keys extends keyof T> = Required<Pick<T, Keys>> & Omit<T, Keys>;

type cases = [
  Expect<
    Equal<
      Prettify<PartialRequired<{ id?: string; userName?: string; password?: string }, "id" | "userName">>,
      { id: string; userName: string; password?: string }
    >
  >
];
