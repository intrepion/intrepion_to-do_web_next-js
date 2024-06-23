import { expect, test } from "vitest";
import RootLayout from "./layout";

test("RootLayout", async () => {
  const expected = RootLayout;

  const actual = RootLayout;

  expect(actual).toEqual(expected);
});
