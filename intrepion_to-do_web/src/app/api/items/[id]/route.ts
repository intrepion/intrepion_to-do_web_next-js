import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const DELETE = async (
  req: NextRequest,
  context: { params: { id: string } },
) => {
  const id = Number(context.params.id || 0);

  const item = await prisma.item.delete({
    where: {
      id: id,
    },
  });

  if (!item) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      },
    );
  }

  return NextResponse.json({});
};

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

export const PUT = async (
  req: NextRequest,
  context: { params: { id: string } },
) => {
  const { title } = await req.json();
  const id = Number(context.params.id || 0);

  const item = await prisma.item.update({
    where: {
      id: Number(id),
    },

    data: {
      title,
    },
  });

  return NextResponse.json({
    item,
  });
};
