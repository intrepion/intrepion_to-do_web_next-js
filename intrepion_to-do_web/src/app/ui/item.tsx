"use client";

import { Item } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  item: Item;
}

export default function ItemUi({ item }: Props) {
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
      </div>
    </li>
  );
}
