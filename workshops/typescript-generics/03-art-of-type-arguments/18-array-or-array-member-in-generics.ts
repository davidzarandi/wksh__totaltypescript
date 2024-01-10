const makeStatus = <TStatuses extends string[]>(statuses: TStatuses) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type _tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];