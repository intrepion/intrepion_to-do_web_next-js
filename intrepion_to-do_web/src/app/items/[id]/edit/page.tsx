"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

const ItemsIdEditPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [newTitle, setNewTitle] = useState("");
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const router = useRouter();
  const { data, error, isLoading } = useSWR("/api/items/" + id, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    setNewTitle(data?.item.title);
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitLoading(true);

    await fetch("/api/items/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
      }),
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
      <h1 data-cy="header-main">Edit Item</h1>
      <input
        data-cy="textbox-title"
        defaultValue={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Input your title"
        type="text"
      />
      <button data-cy="button-edit" disabled={isSubmitLoading} type="submit">
        {isSubmitLoading ? "Loading ..." : "Edit Item"}
      </button>
    </form>
  );
};

export default ItemsIdEditPage;
