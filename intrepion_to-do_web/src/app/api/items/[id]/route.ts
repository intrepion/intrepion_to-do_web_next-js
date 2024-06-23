import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const GET = async (
  _req: NextRequest,
  context: { params: { id: string } },
) => {
  unstable_noStore();
  const id = Number(context.params.id || 0);

  const item = await prisma.item.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ item });
};
