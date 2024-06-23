"use client";

import React from "react";
import { Item } from "@prisma/client";

interface Props {
  item: Item;
}

export default function ItemUi({ item }: Props) {
  return (
    <li>
      <div>
        <span>{item.title}</span>
      </div>
    </li>
  );
}
