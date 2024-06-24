import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

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
