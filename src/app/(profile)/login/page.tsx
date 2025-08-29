"use client";

import { FcGoogle } from "react-icons/fc";

import { account } from "@/app/server/appwrite";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl font-bold">Social Login</h1>
      <div className="mt-5">
        <button
          className="flex justify-center items-center gap-2 border-2 border-slate-600 px-5 py-2 rounded-sm"
          onClick={() => {
            account.createOAuth2Session(
              'google' as any,
              "http://localhost:3000/login-test", // Success URL
              "http://localhost:3000" // Failure URL
            );
          }}
        >
          <FcGoogle size={30} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;