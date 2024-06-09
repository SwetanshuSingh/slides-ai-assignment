"use client";
import signInWithGoolge from "@/actions/signInwithGoogle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseLocalStorage from "@/hooks/useLocalStorage";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const { setApiKey } = UseLocalStorage();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSignIn = async () => {
    setApiKey(inputValue);
    signInWithGoolge();
  };

  return (
    <>
      <div className="w-64 flex flex-col gap-2">
        <Input
          value={inputValue}
          onChange={(evt) => handleChange(evt)}
          placeholder="Enter your OpenAI API Key"
        />
        <Button
          onClick={handleSignIn}
          disabled={!inputValue || inputValue.length === 0}
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
