import * as assert from "node:assert";
import { it } from "node:test";

const makeSafe =
  (func: unknown) =>
    (
      ...args: unknown
    ):
      | {
      type: "success";
      result: unknown;
    }
      | {
      type: "failure";
      error: Error;
    } => {
      try {
        const result = func(...args);

        return {
          type: "success",
          result,
        };
      } catch (e) {
        return {
          type: "failure",
          error: e as Error,
        };
      }
    };

it("Should return the result with a { type: 'success' } on a successful call", () => {
  const func = makeSafe(() => 1);

  const result = func();

  assert.deepStrictEqual(result, {
    type: "success",
    result: 1,
  });

  type _tests = [
    Expect<
      Equal<
        typeof result,
        | {
        type: "success";
        result: number;
      }
        | {
        type: "failure";
        error: Error;
      }
      >
    >,
  ];
});

it("Should return the error on a thrown call", () => {
  const func = makeSafe(() => {
    if (1 > 2) {
      return "123";
    }
    throw new Error("Oh dear");
  });

  const result = func();

  assert.deepStrictEqual(result, {
    type: "failure",
    error: new Error("Oh dear"),
  });

  type _tests = [
    Expect<
      Equal<
        typeof result,
        | {
        type: "success";
        result: string;
      }
        | {
        type: "failure";
        error: Error;
      }
      >
    >,
  ];
});

it("Should properly match the function's arguments", () => {
  const func = makeSafe((a: number, b: string) => {
    return `${a} ${b}`;
  });

  // @ts-expect-error
  func();

  // @ts-expect-error
  func(1, 1);

  func(1, "1");
});