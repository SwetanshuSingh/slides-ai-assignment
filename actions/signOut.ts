"use server";

import { signOut } from "@/auth";

export const signOutGoogle = async () => {
  await signOut();
};
