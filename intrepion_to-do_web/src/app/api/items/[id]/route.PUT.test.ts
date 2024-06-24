import { NextRequest } from "next/server";
import { it, expect, describe, vi } from "vitest";
import prismaMock from "../../../../lib/__mocks__/prisma";
import { PUT } from "./route";

vi.mock("../../../../lib/prisma");

describe("PUT api/items/[id]", () => {
  it("should return the generated item", async () => {
    const updates = {
      title: "next test title",
    };
    const expected = {
      completed: false,
      id: 1,
      title: "next test title",
      visible: true,
    };
    prismaMock.item.update.mockResolvedValue(expected);

    const request = new NextRequest("https://localhost:3000/api/items/1", {
      method: "PUT",
      body: JSON.stringify(updates),
    });
    const context = { params: { id: "1" } };
    const res = await PUT(request, context);
    const json = await res.json();
    const actual = json.item;

    console.log("actual", actual);
    console.log("expected", expected);
    expect(prismaMock.item.update).toHaveBeenCalledTimes(1);
    expect(prismaMock.item.update).toHaveBeenCalledWith({
      data: { title: updates.title },
      where: { id: 1 },
    });
    expect(actual).toStrictEqual(expected);
  });
});
