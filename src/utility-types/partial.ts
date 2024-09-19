import { Expect, Equal, NotEqual } from 'type-testing';

type A = { hello: string; world: number };

type test = Expect<Equal<A['hello'], string>>;


type test2 = Expect<NotEqual<A['hello'], string | undefined>>;
type test3 = Expect<Equal<Partial<A>['hello'], string | undefined>>;
