const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = ReturnType<typeof getUser>;

type _tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];