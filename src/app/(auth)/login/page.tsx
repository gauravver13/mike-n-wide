"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
    //   localStorage.setItem("jwtToken", res?.token);  // Save the JWT token to localStorage
        console.log("USER SIGNED UP SUCCESSFULLY ")
        router.push("/user");
      
    } else {
      alert("Invalid login credentials");
    }
  };

  const handleGoogleLogin = async () => {
    const res = await signIn("google", { redirect: false });

    if (res?.ok) {
    //   localStorage.setItem("jwtToken", res?.token);  // Save the JWT token to localStorage
    console.log("USER LOGGED IN SUCCESSFULLY...!")
      router.push("/user");
    }
  };

  return (
    <div className="bg-red-500">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}
