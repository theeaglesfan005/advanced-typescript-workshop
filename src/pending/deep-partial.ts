// difficulty: hard
// tags: conditional-types, mapped-types, utility-types, index-accessed, recursion

import { Equal, Expect } from 'type-testing';
import { Prettify } from '../prettify';

// TODO: figure out solution
// TODO: break cases into smaller chunks

type X1 = {
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
};

// TODO: arrays
type DeepPartial<T> = T extends object
  ? {
      [K in keyof T]?: T[K] extends Function ? T[K] : DeepPartial<T[K]>;
    }
  : T;

type Result = {
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
};

type cases = [Expect<Equal<DeepPartial<{ moo: 'cow' }>, { moo?: 'cow' }>>, Expect<Equal<DeepPartial<X1>, Result>>];
