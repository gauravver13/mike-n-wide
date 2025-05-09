"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  console.log("DATA: ", session);
  // console.log("DATA USER: ", session?.user);
  

  return (
    <button
      onClick={() => (session ? signOut() : signIn("google"))}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        backgroundColor: session ? "#ff4d4d" : "#4caf50",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      {session ? <div className="w-full flex flex-col bg-green-400">
          <div>USER NAME: {session.user.name}</div>
          <div>USER EMAIL: {session.user.email}</div>
          <div>USER NAME: {session.user.id}</div>
          <div>USER NAME: {session.user.image}</div>
      </div> : "Sign In with Google"}
    </button>
  );
}
