// difficulty: medium
// tags: template-literals, utility-types, generics-with-constraints

// TODO:
// Rewrite into an exercise

type EventHandler<T extends string> = (type: T, event: any) => void;

interface MyInstance {
  id: string;
  onClick: EventHandler<'click'>;
  onError: EventHandler<'error'>;
  onMoo: EventHandler<'moo'>;
  shouldShow: boolean;
  numberOfCows: number;
}

type EventTypes = Parameters<MyInstance[Extract<keyof MyInstance, `on${string}`>]>[0];

interface FakeProps {
  id: string;
  onClick: () => void;
  onError: () => void;
  onMoo: () => void;
  shouldShow: boolean;
  numberOfCows: number;
}

type PropKeys = keyof FakeProps;

type A = Extract<PropKeys, `on${string}`>;
