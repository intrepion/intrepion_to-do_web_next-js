import prisma from "./prisma";

test("prisma", () => {
  const expected = prisma;

  const actual = prisma;

  expect(actual).equal(expected);
});
