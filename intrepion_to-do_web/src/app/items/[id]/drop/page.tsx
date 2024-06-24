"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

const ItemsIdDropPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [title, setTitle] = useState("");
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const router = useRouter();
  const { data, error, isLoading } = useSWR("/api/items/" + id, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    setTitle(data?.item.title);
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitLoading(true);

    await fetch("/api/items/" + id, {
      method: "DROP",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.info(res);
      })
      .catch((e) => {
        console.info(e);
      });

    setIsSubmitLoading(false);

    router.push("/");
  };

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading item...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 data-cy="header-main">Drop Item</h1>
      <h2>{title}</h2>
      <button data-cy="button-drop" disabled={isSubmitLoading} type="submit">
        {isSubmitLoading ? "Loading ..." : "Drop Item"}
      </button>
    </form>
  );
};

export default ItemsIdDropPage;
