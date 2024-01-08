/**
 * This time, let's solve this with function overloads!
 */
const returnWhatIPassIn = (t: unknown) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type _tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];