import { Expect, Equal } from 'type-testing';

// difficulty: easy
// tags: utility-types, learning-generics

/**
 * Update `MyType` to use 10 utility types to transform `Input` to `Output`.
 *
 * Hint: You only really need 1 utility type, so you'll have to get creative on
 * how to include 9 other ones.
 */

type Input = { hello: 'world'; extra: 'prop' };
type Output = { hello: 'world' };

type MyType = Input;

type cases = [Expect<Equal<MyType, Output>>];
