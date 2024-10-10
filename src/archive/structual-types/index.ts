/**
 * Create some types that the example needs to match.
 *
 * Each level requires using a utility type
 *
 * Maybe include multiple types that must be included as well
 */

import { Expect, Equal, NotEqual } from 'type-testing';

type ExpectedType = { hello: 'world' };

type MyType = NoInfer<
  NonNullable<Required<Partial<Exclude<Extract<Pick<ReturnType<() => { moo: ExpectedType }>, 'moo'>['moo'], ExpectedType>, ''>>>>
>;

type cases = [Expect<Equal<MyType, ExpectedType>>];

type Props = 'a' | 'b' | 'c';

// function test<T extends Props>(obj: Record<T, { data: string}>, prop: NoInfer<T>): boolean {
function test<T extends Props>(obj: Record<T, { data: string }>, prop: T): boolean {
  return !!obj[prop];
}

test<'a' | 'b'>({ a: { data: '' }, b: { data: '' } }, 'b');
