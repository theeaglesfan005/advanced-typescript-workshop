// source: https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md

// difficulty: easy
// tags: template-literals, conditional-types, distribution

import { Expect, Equal } from "type-testing";

type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = `${B}${E extends []
  ? ""
  : `__${E[number]}`}${M extends [] ? "" : `--${M[number]}`}`;

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >,
];
