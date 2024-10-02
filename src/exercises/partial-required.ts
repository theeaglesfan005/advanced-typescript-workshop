// Medium

// Utility Types, Pick and Omit, Intersections

import { Expect, Equal } from "type-testing";
import { Prettify } from "../prettify";

type PartialRequired<T, Keys extends keyof T> = Prettify<Required<Pick<T, Keys>> & Omit<T, Keys>>;
// type PartialRequired<T, Keys extends keyof T> = Required<Pick<T, Keys>> & Omit<T, Keys>;

type Test = PartialRequired<{ id?: string; userName?: string; password?: string }, 'id'>
//   ^?

const test = {} as Test;
test.id;
test.password;
test.userName;

type cases = [
    Expect<
    Equal<
            PartialRequired<{ id?: string; userName?: string; password?: string, nullPromp: null, undefinedPromp: undefined }, "id" | 'userName'>,
            { id: string; userName: string; password?: string, nullPromp: null, undefinedPromp: undefined }
        >
    >,
];


