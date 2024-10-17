import { Equal, Expect } from 'type-testing';

// difficulty: medium
// tags: template-literals, utility-types, generics-with-constraints, distribution

/**
 * Create a union of a the type arguments for each "on" event handler:
 * `onClick`, `onError`, `onHover`.
 */

type EventHandler<T extends string> = (type: T, event: unknown) => void;

interface Props {
  id: string;
  onClick: EventHandler<'click'>;
  onError: EventHandler<'error'>;
  onHover: EventHandler<'hover'>;
  shouldShow: boolean;
}

type EventTypes = Parameters<Props[Extract<keyof Props, `on${string}`>]>[0];

type cases = [Expect<Equal<EventTypes, 'click' | 'error' | 'hover'>>];
