import { expect, test } from "vitest";
import ItemsIdViewPage from "./page";

test("ItemsIdViewPage", async () => {
  const expected = ItemsIdViewPage;

  const actual = ItemsIdViewPage;

  expect(actual).toEqual(expected);
});
