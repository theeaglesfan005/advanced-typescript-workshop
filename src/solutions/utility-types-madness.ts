import { Expect, Equal } from 'type-testing';

// complexity: 1
// tags: utility-types, learning-generics

// Update `MyType` to use 10 utility types to transform `Input` to `Output`.
//
// Hint: You only really need 1 utility type, so you'll have to get creative on
// how to include 9 other ones.

type Input = { hello: 'world'; extra: 'prop' };
type Output = { hello: 'world' };

// This is technically all that is needed to solve this exercise. The rest of
// the types used in MyType is to meet the requirement of using 10 utility
// types.
type MainSolution<T extends Input> = Pick<T, 'hello'>;

type MyType = Extract<
  Exclude<
    NoInfer<
      ReturnType<() => Parameters<(arg: NonNullable<Omit<Required<Partial<MainSolution<Input>>>, ''>>) => void>[0]>
    >,
    { moo: 'cow' }
  >,
  Output
>;

type cases = [Expect<Equal<MyType, Output>>];
