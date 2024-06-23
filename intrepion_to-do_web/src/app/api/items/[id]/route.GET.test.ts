import { NextRequest } from "next/server";
import { it, expect, describe, vi } from "vitest";
import prismaMock from "../../../../lib/__mocks__/prisma";
import { GET } from "./route";

vi.mock("../../../../lib/prisma");

describe("GET api/items/[id]", () => {
  it("should return the generated item", async () => {
    const expected = {
      completed: false,
      id: 1,
      title: "test title",
      visible: true,
    };
    prismaMock.item.findUnique.mockResolvedValue(expected);

    const request = new NextRequest("https://localhost:3000/api/items/1", {
      method: "GET",
    });
    const context = { params: { id: "1" } };
    const res = await GET(request, context);
    const json = await res.json();
    const actual = json.item;

    expect(prismaMock.item.findUnique).toHaveBeenCalledTimes(1);
    expect(prismaMock.item.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(actual).toStrictEqual(expected);
  });
});
