// difficulty: medium
// tags: utility-types, generics-with-constraints, index-accessed, learning-generics

/**
 * Update `emit` so that the first argument is the union of types from `Events`
 * and the second argument is the rest of the object except the type property.
 */

type Events =
  | { type: 'click'; clicks: number }
  | { type: 'error'; error: Error }
  | { type: 'update'; updates: string; timestamp: Date }
  | { type: 'loaded'; success: boolean };

declare function emit<K extends Events['type']>(type: K, payload: Omit<Extract<Events, { type: K }>, 'type'>): void;

emit('click', { clicks: 42 });
emit('error', { error: new Error('some error') });
emit('update', { updates: 'some update', timestamp: new Date() });
emit('loaded', { success: true });

// @ts-expect-error
emit('update', { updates: 'some update', error: new Error('') });
