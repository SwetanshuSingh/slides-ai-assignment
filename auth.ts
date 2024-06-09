import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
  },

  callbacks: {
    async signIn({ account }) {
      //Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;
      return true;
    },

    async session({ session, token }) {
      if (token.access_token && session.user) {
        session.user.access_token = token.access_token;
      }

      if (token.refresh_token && session.user) {
        session.user.refresh_token = token.refresh_token;
      }

      return session;
    },

    async jwt({ token, account, user }) {
      if (user) token.id = user.id;

      if (account) {
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      }
      return token;
    },
  },
  ...authConfig,
});
