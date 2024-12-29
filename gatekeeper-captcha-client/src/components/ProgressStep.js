import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ProgressStep({ name, description, completed }) {
  return (
    <div>
      <li className="flex">
        <CheckCircleIcon
          className={`h-7 w-7 ${
            (completed && "text-green-600") || "text-gray-400"
          }`}
        />
        <div className="ml-2 flex-1">
          <div className="font-bold">{name}</div>
          <div className="text-gray-700 dark:text-gray-400">{description}</div>
        </div>
      </li>
    </div>
  );
}
