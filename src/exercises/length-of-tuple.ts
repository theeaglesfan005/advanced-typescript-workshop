import { Equal, Expect } from 'type-testing';

// difficulty: easy
// tags: conditional-types, index-accessed, generics-with-constraints, infer, learning-arrays, learning-generics

/**
 * For given a tuple, update the `Length` type such that it returns the length.
 */

type Tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type SpaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type Length<TArray> = unknown;

type cases = [Expect<Equal<Length<Tesla>, 4>>, Expect<Equal<Length<SpaceX>, 5>>];
