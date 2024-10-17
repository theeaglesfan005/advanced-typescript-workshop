// difficulty: easy
// tags: learning-generics, learning-arrays

// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/03.5-type-helpers-pattern/20.7-non-empty-array.solution.ts

/**
 * Update `makeEnum` so that the argument cannot be an empty array.
 */

type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

// @ts-expect-error
makeEnum([]);
