import { expect, test } from "vitest";
import ItemUi from "./item";

test("ItemUi", async () => {
  const expected = ItemUi;

  const actual = ItemUi;

  expect(actual).toEqual(expected);
});
