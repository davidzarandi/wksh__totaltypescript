const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = unknown;

type _tests = [Expect<Equal<MyFuncReturn, string>>];