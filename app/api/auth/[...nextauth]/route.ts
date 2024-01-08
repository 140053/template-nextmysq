import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { NextApiRequest, NextApiResponse } from "next";



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
   
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        if (profile && profile.email) {
          const sts: boolean = profile.email.endsWith("@cbsua.edu.ph");
          return Promise.resolve(sts);
        }
      }
      return Promise.resolve('/');
    },
  },
 
  secret: process.env.NEXTAUTH_SECRET || "",
});

export { handler as GET, handler as POST };
