"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ItemsMakePage = () => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => {
        console.info(res);
      })
      .catch((e) => {
        console.info(e);
      });

    setIsLoading(false);
    router.push("/");
  };

  return (
    <main>
      <h1 data-cy="header-main">Make Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="textbox-title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Input your title"
          type="text"
          value={title}
        />
        <button data-cy="button-items-make" disabled={isLoading} type="submit">
          {isLoading ? "Loading ..." : "Make Item"}
        </button>
      </form>
    </main>
  );
};

export default ItemsMakePage;
