const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = unknown;

type _tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];