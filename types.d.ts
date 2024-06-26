import { DefaultSession, DeafultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      access_token?: string;
      refresh_token?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
    interface JWT {
      access_token?: string;
      refresh_token?: string;
    }
  }