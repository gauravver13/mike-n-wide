"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Fix: use next/navigation instead of next/router
import { signIn } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCredentialsSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Create user in database
      const response = await axios.post("/api/auth/signup", form);
      console.log("User created:", response.data.user);

      // Sign in the user after successful signup
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signIn("google", { 
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Google signup error:", error);
      setError("An error occurred with Google signup");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleCredentialsSignup} className="bg-red-300 p-6 rounded-2xl shadow-md w-full max-w-md space-y-5">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
            {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={form.name}
          required
          disabled={isLoading}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none disabled:opacity-50"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          required
          disabled={isLoading}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none disabled:opacity-50"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
          disabled={isLoading}
          minLength={6}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none disabled:opacity-50"
        />

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50"
        >
          {isLoading ? "Creating Account..." : "Sign Up"}
        </button>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 disabled:opacity-50"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            Continue with Google
          </div>
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-black hover:underline font-semibold">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
