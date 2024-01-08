import * as assert from "node:assert";
import { it } from "node:test";

const returnBothOfWhatIPassIn = <T1, T2>(params: {
  a: T1;
  b: T2;
}): [T1, T2] => {
  return [params.a, params.b];
};

it("Should return a tuple of the properties a and b", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  assert.deepStrictEqual(result, ["a", 1]);

  type test1 = Expect<Equal<typeof result, [string, number]>>;
});