// Easy

// Utility, Intersections

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

import { Expect, Equal } from "type-testing";

type Fruit = "apple" | "banana" | "orange";
type Citrus = "orange" | "lemon";

// type CommonFruits = Fruit & Citrus
type CommonFruits = Extract<Fruit, Citrus>;

type cases = [Expect<Equal<CommonFruits, "orange">>];
