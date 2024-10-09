// difficulty: easy
// tags: conditional-types, index-accessed, generics-with-constraints, infer, learning-arrays, learning-generics

import { Equal, Expect } from "type-testing";

// TAGS: easy, array, generics
// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

// For given a tuple, you need create a generic Length, pick the length of the tuple

type Tesla = ["tesla", "model 3", "model X", "model Y"];
type SpaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"];

type Length<TArray extends any[]> = TArray["length"];

type cases = [Expect<Equal<Length<Tesla>, 4>>, Expect<Equal<Length<SpaceX>, 5>>];

// TAGS: easy, array, conditional types
type Length2<TArray> = TArray extends { length: infer L } ? L : never;

type cases2 = [Expect<Equal<Length2<Tesla>, 4>>, Expect<Equal<Length2<SpaceX>, 5>>];

type Length3<T extends { length: unknown }> = T["length"];
