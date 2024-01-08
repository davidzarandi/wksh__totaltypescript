import * as assert from "node:assert";
import { it } from "node:test";

/**
 * This time, let's try and solve this one
 * with function overloads too!
 */
export const youSayGoodbyeISayHello = (greeting: "goodbye" | "hello") => {
  return greeting === "goodbye" ? "hello" : "goodbye";
};

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type _tests = [Expect<Equal<typeof result, "goodbye">>];

  assert.deepStrictEqual(result, "goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type _tests = [Expect<Equal<typeof result, "hello">>];

  assert.deepStrictEqual(result, "hello");
});