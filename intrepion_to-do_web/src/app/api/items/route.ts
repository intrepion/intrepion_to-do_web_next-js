import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const GET = async () => {
  unstable_noStore();
  const items = await prisma.item.findMany({});
  return NextResponse.json({
    items,
  });
};

export const POST = async (req: NextRequest) => {
  const { title } = await req.json();

  const item = await prisma.item.create({
    data: {
      title,
    },
  });

  return NextResponse.json({
    item,
  });
};
