import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1 data-cy="header-main-home">Home</h1>
      <Link data-cy="link-items-make" href="/items/make">
        Make Item
      </Link>
    </main>
  );
}
