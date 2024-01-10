import * as assert from "node:assert";
import { it } from "node:test";

/**
 * There are two possible solutions to this problem - and it's
 * to do with the way you specify the generic. Can you get
 * both solutions?
 */
const typedObjectKeys = (obj: unknown) => {
  return Object.keys(obj);
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  assert.deepStrictEqual(result1, ["a", "b"]);

  type _tests = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});