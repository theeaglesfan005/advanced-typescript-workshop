import { Equal, Expect } from 'type-testing';

// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/06-challenges/39-discriminated-union-with-unique-values-to-object.solution.ts

// difficulty: medium
// tags: mapped-types, conditional-types, index-accessed, key-remapping, infer, distribution

/**
 * Create a type where each key of the object is route route listed in `Route`
 * and the value is the search object.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 */

type Route =
  | {
      route: '/';
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: '/about' }
  | { route: '/admin' }
  | { route: '/admin/users' };

type RoutesObject = {
  [R in Route as R['route']]: R extends { search: infer S } ? S : never;
};

type cases = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': {
          page: string;
          perPage: string;
        };
        '/about': never;
        '/admin': never;
        '/admin/users': never;
      }
    >
  >,
];
