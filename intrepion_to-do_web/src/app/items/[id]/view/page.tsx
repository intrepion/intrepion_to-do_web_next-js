"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

const ItemsIdViewPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [title, setTitle] = useState("");
  const { data, error, isLoading } = useSWR("/api/items/" + id, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    setTitle(data?.item.title);
  }, [data]);

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading item...</p>;
  }

  return (
    <main>
      <h1 data-cy="header-main">Make Item</h1>
      <p>
        <Link data-cy="link-home" href="/">
          Back
        </Link>
      </p>
      <h1>View Item</h1>
      <h2>{title}</h2>
    </main>
  );
};

export default ItemsIdViewPage;
