"use client";

import { signOutGoogle } from "@/actions/signOut";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return <Button onClick={() => signOutGoogle()}>Sign Out</Button>;
};

export default LogoutButton;
