// source: https://github.com/total-typescript/type-transformations-workshop/blob/main/src/06-challenges/39-discriminated-union-with-unique-values-to-object.solution.ts

// TODO: 

import { Equal, Expect } from "type-testing";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

type RoutesObject = unknown;

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >,
];