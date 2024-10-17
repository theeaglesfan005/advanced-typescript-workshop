import { Equal, Expect } from 'type-testing';

// difficulty: medium
// tags: template-literals, utility-types, generics-with-constraints, distribution

/**
 * Update `EventTypes` to create a union of a the type arguments for any "on"
 * event handler: `onClick`, `onError`, `onHover`.
 *
 * Consider how to implement this so that, new EventHandlers can be added to
 * `Props` without having to update `EventTypes` again.
 */

type EventHandler<T extends string> = (type: T, event: unknown) => void;

interface Props {
  id: string;
  onClick: EventHandler<'click'>;
  onError: EventHandler<'error'>;
  onHover: EventHandler<'hover'>;
  shouldShow: boolean;
}

type EventTypes = Props;

type cases = [Expect<Equal<EventTypes, 'click' | 'error' | 'hover'>>];
