"use client";

import { Item } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ItemUi from "./ui/item";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

export default function HomePage() {
  const [items, setItems] = useState<Array<Item>>([]);
  const { data, error, isLoading } = useSWR("/api/items/", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    setItems(data?.items);
  }, [data]);

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading items...</p>;
  }

  return (
    <main>
      <h1 data-cy="header-main-home">Home</h1>
      <Link data-cy="link-items-make" href="/items/make">
        Make Item
      </Link>
      <ul>
        {items
          ?.map((item: any, i: number) => <ItemUi key={i} item={item} />)
          .sort()
          .reverse()}
      </ul>
    </main>
  );
}
