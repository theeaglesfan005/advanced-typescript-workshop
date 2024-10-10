import { Expect, Equal, NotEqual } from "type-testing";

const hello = "hello";

type test = Expect<Equal<typeof hello, "hello">>;

const hello2 = "moocow";

type test2 = Expect<NotEqual<typeof hello, "world">>;

console.log("hello world");
