import { authOptions } from "@/lib/auth";
import Image from "next/image";
import { getServerSession } from "next-auth/next";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header>
      <h2>Admin Dashboard</h2>
      <a href="/api/auth/signout">
        {session?.user && session?.user?.name}
        <Image
          src={session?.user?.image || "/user.svg"}
          alt="User Image"
          width={36}
          height={36}
          className="rounded-full"
        />
      </a>
    </header>
  );
}
