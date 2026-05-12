import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

declare module "next-auth" {
    interface User {
        username?: string | null;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    username: profile.name,
                };
            },
        }),
    ],
    debug: process.env.AUTH_DEBUG === "true",
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
});
