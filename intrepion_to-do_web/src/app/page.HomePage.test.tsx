import { expect, test } from "vitest";
import HomePage from "./page";

test("HomePage", async () => {
  const expected = HomePage;

  const actual = HomePage;

  expect(actual).toEqual(expected);
});
