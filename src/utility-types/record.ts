import { Expect, Equal, NotEqual } from 'type-testing';

type Props = "hello" | "world"

type Info = { data: string };

type test = Expect<Equal<Record<Props, number>, { hello: number; world: number }>>;
