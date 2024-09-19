import { Expect, Equal } from 'type-testing';

const hello = "HELLO!!!"

type test = Expect<Equal<typeof hello, 'HELLO!!!'>>;

const hello2 = "moocow"

type test2 = Expect<Equal<typeof hello2, 'HELLO!!!'>>;
