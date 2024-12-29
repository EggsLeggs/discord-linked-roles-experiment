import React from "react";
import ProgressStep from "./ProgressStep";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function SideBar() {
  // make an dictionary of steps and the completion status
  let steps = [
    {
      name: "Discord sign-in",
      description: "Please sign-in with your account",
      completed: true,
    },
    {
      name: "Captcha",
      description: "Please complete the captcha",
      completed: true,
    },
    {
      name: "Submission",
      description: "Verification of your submission",
      completed: true,
    },
  ];
  return (
    <div className="flex h-full w-full flex-col rounded-md bg-slate-50 px-6 py-8 dark:border dark:border-slate-100/10 dark:bg-dark-100">
      <div className="mb-14 flex items-center">
        <Logo className="h-9 w-9 dark:fill-white" alt="GateKeeper Logo" />
        <h1 className="ml-1 text-xl font-extrabold">GateKeeper</h1>
      </div>
      <div className="grow space-y-6">
        {steps.map((step, index) => (
          <ProgressStep
            key={index}
            name={step.name}
            description={step.description}
            completed={step.completed}
          />
        ))}
      </div>
      <a
        href="https://invite.gatekeeperbot.net"
        target="_blank"
        className="mt-4 rounded border border-gray-700 bg-white py-2 px-4 text-center font-bold hover:bg-slate-200 dark:border-slate-100/50 dark:bg-dark-100 dark:hover:bg-slate-200 dark:hover:text-black"
        rel="noreferrer"
      >
        Invite GateKeeper
      </a>
    </div>
  );
}
