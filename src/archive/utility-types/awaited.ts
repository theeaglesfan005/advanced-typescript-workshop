import { Expect, Equal, NotEqual } from 'type-testing';

type A = Awaited<Promise<number>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<number | Promise<number>>;

type cases = [
    Expect<Equal<A, B>>,
    Expect<Equal<A, C>>,
    Expect<NotEqual<A, Promise<string>>>,
]

// https://typehero.dev/challenge/awaited
