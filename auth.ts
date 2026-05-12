import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    debug: process.env.AUTH_DEBUG === "true",
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
});
