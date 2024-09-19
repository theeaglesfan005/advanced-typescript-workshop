import { Expect, Equal, NotEqual } from 'type-testing';

type A = { hello: string; world: number };

type test = Expect<Equal<Pick<A, 'hello'>, { hello: string }>>;
type test2 = Expect<Equal<Pick<A, 'world'>, { world: number }>>;
