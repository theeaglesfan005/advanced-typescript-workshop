import { Equal, Expect } from 'type-testing';

// difficulty: medium
// tags: mapped-types, conditional-types, index-accessed, key-remapping, infer, distribution

/**
 * Update `RoutesObject` so that each key of the object type is the route listed
 * in `Route` and the value is the search object type.
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

type RoutesObject = unknown;

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
