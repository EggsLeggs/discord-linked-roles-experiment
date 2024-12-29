import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Submit() {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center text-center">
      <div className="rounded-md border p-2 dark:border-slate-100/10">
        <ShieldCheckIcon
          className="h-6 w-6  text-gray-700 dark:text-gray-400"
          alt="GateKeeper Logo"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold">Submission Completed</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        Please consider adding the bot to your server
      </p>
    </div>
  );
}
