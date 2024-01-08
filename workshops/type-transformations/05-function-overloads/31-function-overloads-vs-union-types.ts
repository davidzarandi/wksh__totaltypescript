import * as assert from "node:assert";
import { it } from "node:test";

function runGenerator(generator: unknown) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  assert.strictEqual(result, "hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  assert.strictEqual(result, "hello");

  type test1 = Expect<Equal<typeof result, string>>;
});