import { Equal, Expect } from 'type-testing';

// complexity: 9
// tags: conditional-types, mapped-types, utility-types, index-accessed, recursion

// Update `DeepPartial` to a variation of `Partial` that handles nested
// properties.

type DeepPartial<T> = T extends any[]
  ? {
      [K in keyof T]: T[K] extends Function ? T[K] : DeepPartial<T[K]>;
    }
  : T extends object
    ? {
        [K in keyof T]?: T[K] extends Function ? T[K] : DeepPartial<T[K]>;
      }
    : T;

type cases = [
  Expect<Equal<DeepPartial<{ moo: 'cow' }>, { moo?: 'cow' }>>,
  Expect<
    Equal<
      DeepPartial<{
        nested: {
          prop: boolean;
        };
      }>,
      {
        nested?: {
          prop?: boolean;
        };
      }
    >
  >,
  Expect<Equal<DeepPartial<{ functions: () => string }>, { functions?: () => string }>>,
  Expect<Equal<DeepPartial<{ arrays: [1, 2, 3] }>, { arrays?: [1, 2, 3] }>>,
  Expect<Equal<DeepPartial<{ arrays: [1, 2, 3] }>, { arrays?: [1, 2, 3] }>>,
  Expect<
    Equal<
      DeepPartial<{ nested: { arrays: [1, { deeply: 'nested' }, 3] } }>,
      { nested?: { arrays?: [1, { deeply?: 'nested' }, 3] } }
    >
  >,
  Expect<
    Equal<
      DeepPartial<{
        a: () => 22;
        b: string;
        c: {
          d: boolean;
          e: {
            g: {
              h: {
                i: true;
                j: 'string';
              };
              k: 'hello';
            };
            l: [
              'hi',
              {
                m: ['hey'];
              },
            ];
          };
        };
      }>,
      {
        a?: () => 22;
        b?: string;
        c?: {
          d?: boolean;
          e?: {
            g?: {
              h?: {
                i?: true;
                j?: 'string';
              };
              k?: 'hello';
            };
            l?: [
              'hi',
              {
                m?: ['hey'];
              },
            ];
          };
        };
      }
    >
  >,
];
