import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Error() {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center text-center">
      <div className="rounded-md border p-2 dark:border-slate-100/10">
        <ExclamationTriangleIcon
          className="h-6 w-6 text-gray-700 dark:text-gray-400"
          alt="GateKeeper Logo"
        />
      </div>
      <h1 className="mt-4 text-3xl font-bold">Something Went Wrong</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        Please try again or contact support
      </p>
    </div>
  );
}
