"use client";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [apiKey, setApiKey] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setApiKey(evt.target.value);
  };

  return (
    <>
      <div className="w-64 flex flex-col gap-2">
        <Input
          value={apiKey}
          onChange={(evt) => handleChange(evt)}
          placeholder="Enter your OpenAI API Key"
        />
        <Button
          onClick={() => signIn("google")}
          disabled={!apiKey || apiKey.length === 0}
          variant="outline"
          className="w-full border-gray-300 text-zinc-800"
        >
          Sign In With Google
        </Button>
      </div>
    </>
  );
};

export default Login;
