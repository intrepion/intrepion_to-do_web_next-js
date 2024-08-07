import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <div>
      <Header />
      <main>
        <p>
          This project build by&nbsp;
          <a href="https://nextjs.org/docs/app">Next.js 13 APP Router</a>,
          using&nbsp;
          <a href="https://next-auth.js.org/getting-started/introduction">
            NextAuth
          </a>
          &nbsp; for authentication,&nbsp;
          <a href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes">
            Modal Intercepting Routing
          </a>
          &nbsp; for /login modal/route and styled by Tailwind. This project
          also included a sample protected route and sub-routes too, It is
          useful for making admin dashboard. I used&nbsp;
          <a href="https://nextjs.org/docs/app/building-your-application/routing/route-groups">
            Route Groups
          </a>
          &nbsp; to make multiple root layouts for each of home page and admin
          dashboard separatly.
        </p>
        <p>
          I made this project to help me understand how to use Next.js 13 APP
          Router structure and how to setup NextAuth, also to have a simple
          starter template for my future projects that need authentication.
        </p>
        <h3>Upcoming actions:</h3>
        <ul>
          <li>- Implement authorization for API routes.</li>
          <li>
            - Utilize the Prisma provider for efficient token and user
            management.
          </li>
          <li>
            - Incorporate a secure Login with email / password functionality.
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
