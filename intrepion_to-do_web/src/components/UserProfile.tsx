"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function UserProfile() {
  const { data: session, status } = useSession();

  const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    signOut();
  };

  if (status === "loading") return <Skeleton width={100} />;

  if (!session) {
    return (
      <Link href="/login" className="user-profile">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            fillRule="evenodd"
          ></path>
        </svg>
        Sign In
      </Link>
    );
  }

  return (
    <a
      className="user-profile"
      href="/api/auth/signout"
      onClick={handleSignOutClick}
      title="Click to SignOut"
    >
      <Image
        alt="User Profile Image"
        className="rounded"
        height={24}
        src={
          session?.user?.image ||
          `https://avatars.dicebear.com/api/micah/${session?.user?.name}.svg`
        }
        width={24}
      />
      {session?.user?.name}
    </a>
  );
}
