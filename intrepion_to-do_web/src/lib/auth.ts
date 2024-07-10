import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (
  !process.env.OAUTH_GITHUB_CLIENT_ID ||
  !process.env.OAUTH_GITHUB_SECRET_ID ||
  !process.env.NEXTAUTH_SECRET
) {
  throw new Error("Auth required env variables are not set");
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.OAUTH_GITHUB_SECRET_ID,
    }),
  ],
  callbacks: {
    session({ user, session }) {
      if (session.user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
};
