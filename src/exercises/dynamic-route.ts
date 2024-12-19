import { Equal, Expect } from 'type-testing';
import { Prettify } from '../prettify';

// difficulty: extreme 7
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

type DynamicRoute<Path> = unknown;

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
