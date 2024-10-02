// // TODO

import { Prettify } from "../prettify";

type DynamicRoute<Path extends string> = Prettify<
    {
        [Parameter in DynamicSegment<SplitPath<Path>>]: string;
    } & {
        [Parameter in CatchAllSegment<SplitPath<Path>>]: string[];
    } & {
        [Parameter in OptionalCatchAllSegment<SplitPath<Path>>]?: string[];
    }
>;

type SplitPath<Path extends string, Fragments extends string[] = []> = Path extends `${infer Head}/${infer Rest}`
    ? SplitPath<Rest, [...Fragments, Head]>
    : Exclude<[...Fragments, Path][number], "">;

type DynamicSegment<Fragment extends string> = Fragment extends `[${infer Dynamic}]`
    ? Dynamic extends ""
        ? never
        : Dynamic extends `...${string}` | `[...${string}]`
        ? never
        : Dynamic
    : never;

type CatchAllSegment<Fragment extends string> = Fragment extends `[...${infer CatchAll}]`
    ? CatchAll extends `[...${string}]`
        ? never
        : CatchAll
    : never;

type OptionalCatchAllSegment<Fragment extends string> = Fragment extends `[[...${infer Optional}]]` ? Optional : never;

type CC = DynamicRoute<"/shop/[slug]/stub/[...foo]/[[...moo]]">;
//   ^?