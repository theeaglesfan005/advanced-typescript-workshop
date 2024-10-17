import { Expect, Equal } from 'type-testing';

// difficulty: easy
// tags: utility-types, learning-generics

/**
 * Use 10 utility types to transform `Input` to `Output`.
 *
 * Hint: You only really need 1 utility type, so you'll have to get creative on
 * how to include 9 other ones.
 */

type Input = { hello: 'world'; extra: 'prop' };
type Output = { hello: 'world' };

// This part doesn't need to be part of the solution
// Just keeping this here to show what the "core" solution is
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
