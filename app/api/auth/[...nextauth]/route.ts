import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],callbacks: {
    async signIn({user, account, profile  }) {
      //console.log(user)
      if (account?.provider === "google") {
        if (profile && profile.email) {
          const sts = profile.email.endsWith("@cbsua.edu.ph");
          return sts;
        } 
      }
      //return true // Do different verification for other providers that don't have `email_verified`
      return '/';
    },
    
  },
  secret: process.env.NEXTAUTH_SECRET,
  //debug: process.env.NODE_ENV === "development"
});

export { handler as GET, handler as POST };
