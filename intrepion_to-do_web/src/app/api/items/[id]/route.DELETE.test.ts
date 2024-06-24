import { NextRequest } from "next/server";
import { it, expect, describe, vi } from "vitest";
import prismaMock from "../../../../lib/__mocks__/prisma";
import { DELETE } from "./route";

vi.mock("../../../../lib/prisma");

describe("DELETE api/items/[id]", () => {
  it("should return the generated item", async () => {
    const resolvedValue = {
      completed: false,
      id: 1,
      title: "test title",
      visible: true,
    };
    const expected = undefined;
    prismaMock.item.delete.mockResolvedValue(resolvedValue);

    const request = new NextRequest("https://localhost:3000/api/items/1", {
      method: "DELETE",
    });
    const context = { params: { id: "1" } };
    const res = await DELETE(request, context);
    const json = await res.json();
    const actual = json.item;

    expect(prismaMock.item.delete).toHaveBeenCalledTimes(1);
    expect(prismaMock.item.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(actual).toStrictEqual(expected);
  });
});
