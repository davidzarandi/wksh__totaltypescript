type Event =
  | {
  type: "click";
  event: MouseEvent;
}
  | {
  type: "focus";
  event: FocusEvent;
}
  | {
  type: "keydown";
  event: KeyboardEvent;
};

type EventType = unknown;

type _tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];