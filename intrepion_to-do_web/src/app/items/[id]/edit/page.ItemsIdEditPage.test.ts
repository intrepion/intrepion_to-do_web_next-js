import { expect, test } from "vitest";
import ItemsIdEditPage from "./page";

test("ItemsIdEditPage", async () => {
  const expected = ItemsIdEditPage;

  const actual = ItemsIdEditPage;

  expect(actual).toEqual(expected);
});
