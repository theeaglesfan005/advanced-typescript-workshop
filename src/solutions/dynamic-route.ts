import { Equal, Expect } from 'type-testing';
import { Prettify } from '../prettify';

// source: https://typehero.dev/challenge/dynamic-route

// difficulty: extreme
// tags: conditional-types, mapped-types, utility-types, index-accessed, recursion, learning-arrays, template-literals, distribution, infer

/**
 * Update `DynamicRoute` to satisfy the following conditions.
 *
 * Given below routes, infer its dynamic params:
 *
 * | Route                     | Params              |
 * |---------------------------|---------------------|
 * | /blog/[slug]/page.js      | { slug: string }    |
 * | /shop/[...slug]/page.js   | { slug: string[] }  |
 * | /shop/[[...slug]]/page.js | { slug?: string[] } |
 *
 * Hint: You might have to use Prettify for this solution.
 */

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
  : Exclude<[...Fragments, Path][number], ''>;

type DynamicSegment<Fragment extends string> = Fragment extends `[${infer Dynamic}]`
  ? Dynamic extends ''
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

type cases = [
  Expect<Equal<DynamicRoute<'/shop'>, {}>>,
  Expect<Equal<DynamicRoute<'/shop/[]'>, {}>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]'>, { slug: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/'>, { slug: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/[foo]'>, { slug: string; foo: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/stub/[foo]'>, { slug: string; foo: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/stub/[foo]'>, { slug: string; foo: string }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/stub/[...foo]'>, { slug: string; foo: string[] }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/stub/[[...foo]]'>, { slug: string; foo?: string[] }>>,
  Expect<Equal<DynamicRoute<'/shop/[slug]/stub/[[...foo]]/[]'>, { slug: string; foo?: string[] }>>,
  Expect<Equal<DynamicRoute<'[[...foo]]/stub/[...bar]'>, { foo?: string[]; bar: string[] }>>,
  Expect<
    Equal<
      DynamicRoute<'[first]/[[...foo]]/stub/[...bar]/[last]'>,
      { first: string; foo?: string[]; bar: string[]; last: string }
    >
  >,
];
