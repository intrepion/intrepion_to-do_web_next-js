import { expect, test } from "vitest";
import ItemsMakePage from "./page";

test("ItemsMakePage", async () => {
  const expected = ItemsMakePage;

  const actual = ItemsMakePage;

  expect(actual).toEqual(expected);
});
