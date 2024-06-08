"use server"
import { signIn } from "@/auth"

const signInWithGoolge = async () => {
    await signIn("google");
}

export default signInWithGoolge;