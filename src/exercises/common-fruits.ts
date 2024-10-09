// difficulty: easy
// tags: utility-types

import { Expect, Equal } from "type-testing";

type Fruit = "apple" | "banana" | "orange";
type Citrus = "orange" | "lemon";

// type CommonFruits = Fruit & Citrus
type CommonFruits = Extract<Fruit, Citrus>;

type cases = [Expect<Equal<CommonFruits, "orange">>];
