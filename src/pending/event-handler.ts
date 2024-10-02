// TODO

type EventHandler<T extends string> = (type: T, event: any) => void;

interface MyInstance {
    id: string;
    onClick: EventHandler<"click">;
    onError: EventHandler<"error">;
    onMoo: EventHandler<"moo">;
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

type Events =
    | {
          type: "click";
          clicks: number;
      }
    | { type: "error"; error: Error }
    | { type: "moo"; moo: "cow" };

// declare function emit<T extends Events, K extends T['type']>(type: K, payload: Omit<Extract<{type:K}, K>, 'type'>): void
declare function emit<K extends Events["type"]>(type: K, payload: Omit<Extract<Events, { type: K }>, "type">): void;

emit("error", { error: new Error("") });
