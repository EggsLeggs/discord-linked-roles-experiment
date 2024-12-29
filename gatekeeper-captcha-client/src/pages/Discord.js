import React from "react";
import { ReactComponent as DiscordLogo } from "../assets/discord-black.svg";

export default function Discord() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };

  return (
    <div className="flex w-1/2 flex-col items-center justify-center text-center">
      <div className="rounded-md border p-2 dark:border-slate-100/10">
        <DiscordLogo
          className="h-6 w-6  fill-gray-700 dark:fill-gray-400"
          alt="Discord Logo"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold">Sign-In to Discord</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        Sign-in to connect your Discord account
      </p>
      <button
        onClick={handleLogin}
        className="mt-8 w-full rounded border border-gray-700 bg-blurple py-2 px-4 text-center font-bold text-white hover:bg-slate-200 hover:text-black dark:border-slate-100/50 dark:hover:bg-slate-200 dark:hover:text-black"
      >
        Continue With Discord
      </button>
    </div>
  );
}
