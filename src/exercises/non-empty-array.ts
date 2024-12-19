// difficulty: easy 2/3
// tags: learning-generics, learning-arrays

/**
 * Update `makeEnum` so that the argument cannot be an empty array.
 */

type NonEmptyArray<T> = unknown;

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

// @ts-expect-error
makeEnum([]);
