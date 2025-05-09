"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";
import ClientAuth from "@/components/ClientAuth";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/user/signup", form);
      // Automatically login after signup
      const res = await signIn("credentials", {
        name: form.name,
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (res) {
        // localStorage.setItem("jwtToken", res?.token ?? "");
        console.log("USER SIGNED UPP::")
        router.push("/user");
      } else {
        setError("Login after signup failed.");
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    const res = await signIn("google", { callbackUrl: "/" });
    if(res?.ok) {
      console.log("RESULT:", res);
      router.push("/user");
      
    } else {
      console.log("RESult error", res);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-200 px-4">
      <div className="w-full max-w-md bg-red-400 shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center">Sign up to Mike & Wide</h1>

        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* <button
            onClick={handleGoogleSignup}
            className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src="/google-icon.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button> */}
          <ClientAuth />
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
