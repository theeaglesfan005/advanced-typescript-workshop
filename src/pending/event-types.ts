// difficulty: medium
// tags: utility-types, generics-with-constraints, index-accessed, learning-generics

// TODO: clean up

type Events =
  | {
      type: "click";
      clicks: number;
    }
  | { type: "error"; error: Error }
  | { type: "moo"; moo: "cow" };

// declare function emit<T extends Events, K extends T['type']>(type: K, payload: Omit<Extract<{type:K}, K>, 'type'>): void
declare function emit<K extends Events["type"]>(
  type: K,
  payload: Omit<Extract<Events, { type: K }>, "type">,
): void;

emit("click", { clicks: 42 });
emit("error", { error: new Error("") });
emit("moo", { moo: "cow" });

// @ts-expect-error
emit("moo", { moo: "cow", error: new Error("") });
