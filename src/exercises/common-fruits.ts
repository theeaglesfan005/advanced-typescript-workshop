import { Expect, Equal } from 'type-testing';

// difficulty: easy
// tags: utility-types

/**
 * Find the common fruit string literals between `Fruit` and `Citrus`.
 */

type Fruit = 'apple' | 'banana' | 'orange';
type Citrus = 'orange' | 'lemon';

// type CommonFruits = Fruit & Citrus
type CommonFruits = Extract<Fruit, Citrus>;

type cases = [Expect<Equal<CommonFruits, 'orange'>>];
