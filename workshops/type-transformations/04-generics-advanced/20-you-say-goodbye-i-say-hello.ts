import * as assert from "node:assert";
import { it } from "node:test";

function youSayGoodbyeISayHello(greeting: unknown) {
  return greeting === "goodbye" ? "hello" : "goodbye";
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  assert.strictEqual(result, "goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  assert.strictEqual(result, "hello");
});