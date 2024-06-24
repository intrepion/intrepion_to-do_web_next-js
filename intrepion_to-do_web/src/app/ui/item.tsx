"use client";

import { Item } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  item: Item;
}

export default function ItemUi({ item }: Props) {
  const router = useRouter();

  const handleDrop: any = async (id: number) => {
    await fetch("/api/items/" + id, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <li>
      <div>
        <span>{item.title}</span>
        <span>
          <Link
            data-cy={"link-items-" + item.id + "-view"}
            href={"/items/" + item.id + "/view"}
          >
            View
          </Link>
        </span>
        <span>
          <Link
            data-cy={"link-items-" + item.id + "-edit"}
            href={"/items/" + item.id + "/edit"}
          >
            Edit
          </Link>
        </span>
        <span>
          <Link
            data-cy={"link-items-" + item.id + "-drop"}
            href={"/items/" + item.id + "/drop"}
          >
            Drop
          </Link>
        </span>
      </div>
    </li>
  );
}
