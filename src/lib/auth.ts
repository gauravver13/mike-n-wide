import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (!user || !user.password) return null;

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) return null;

        return { ...user, id: user.id.toString() };
      },
    }),
  ],
  session: { strategy: "jwt" },
  jwt: { secret: process.env.JWT_SECRET! },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id as string;
      return session;
    },
    async signIn({ user, account }) {
      // console.log("signIn callback:: ", user, account);
      try {
        // Check if the user already exists in DB
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          // const password = user.password;
          // const password = user.password!;
          const password = "zxcvbnm"
          const hashedPassword = await bcrypt.hash(password, 10);
          // Create new user if not found
          existingUser = await prisma.user.create({
              data: {
                email: user.email!,
                name: user.name!,
                image: user.image!,
                password: hashedPassword,
              }
          });
        }

        return true; // Allow login
      } catch (error) {
        console.error("Error saving user:", error);
        return false; // Reject login if DB error
      }
    },
  },
  pages: {
    signIn: "/",
  },
};
