// difficulty: easy
// tags: utility-types

// Add notes that there's type errors below, and there's only 1 line that needs to be changed for FSMConfig
// Include docs on NoInfer

/**
 * Update the types below so that there's no type errors.
 *
 * Hint: This is a one-liner fix!
 */

interface FSMConfig<TState extends string> {
  initial: TState;
  states: Record<
    TState,
    {
      onEntry?: () => void;
    }
  >;
}

export const makeFiniteStateMachine = <TState extends string>(config: FSMConfig<TState>) => config;

const config = makeFiniteStateMachine({
  initial: 'a',
  states: {
    a: {
      onEntry: () => {
        console.log('a');
      },
    },
    // b should be allowed to be specified!
    b: {},
  },
});

const config2 = makeFiniteStateMachine({
  // c should not be allowed! It doesn't exist on the states below
  // @ts-expect-error
  initial: 'c',
  states: {
    a: {},
    // b should be allowed to be specified!
    b: {},
  },
});
