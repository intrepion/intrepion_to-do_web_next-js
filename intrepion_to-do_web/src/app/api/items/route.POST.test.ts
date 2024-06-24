import { NextRequest } from "next/server";
import { it, expect, describe, vi } from "vitest";
import prismaMock from "../../../lib/__mocks__/prisma";
import { POST } from "./route";

vi.mock("../../../lib/prisma");

describe("POST api/items", () => {
  it("should return the generated item", async () => {
    const expected = {
      completed: false,
      id: 1,
      title: "test title",
      visible: true,
    };
    prismaMock.item.create.mockResolvedValue(expected);

    const request = new NextRequest("https://localhost:3000/api/items/", {
      method: "POST",
      body: JSON.stringify(expected),
    });
    const res = await POST(request);
    const json = await res.json();
    const actual = json.item;

    expect(prismaMock.item.create).toHaveBeenCalledTimes(1);
    expect(prismaMock.item.create).toHaveBeenCalledWith({
      data: { title: expected.title },
    });
    expect(actual).toStrictEqual(expected);
  });
});
