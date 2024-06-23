import { it, expect, describe, vi } from "vitest";
import prismaMock from "../../../lib/__mocks__/prisma";
import { GET } from "./route";

vi.mock("../../../lib/prisma");

describe("GET api/items", () => {
  it("should return the generated item", async () => {
    const expected = [
      {
        completed: false,
        id: 1,
        title: "test title",
        visible: true,
      },
    ];
    prismaMock.item.findMany.mockResolvedValue(expected);

    const res = await GET();
    const json = await res.json();
    const actual = json.items;

    expect(prismaMock.item.findMany).toHaveBeenCalledTimes(1);
    expect(prismaMock.item.findMany).toHaveBeenCalledWith({});
    expect(actual).toStrictEqual(expected);
  });
});
