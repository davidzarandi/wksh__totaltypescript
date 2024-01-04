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

type ClickEvent = unknown;

type _tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];