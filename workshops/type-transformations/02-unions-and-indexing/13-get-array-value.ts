const fruits = ["apple", "banana", "orange"];

type AppleOrBanana = unknown;
type Fruit = unknown;

type _tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];