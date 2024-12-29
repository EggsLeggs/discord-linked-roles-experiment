import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FingerPrintIcon } from "@heroicons/react/24/outline";

export default function Captcha() {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center text-center">
      <div className="rounded-md border p-2 dark:border-slate-100/10">
        <FingerPrintIcon
          className="h-6 w-6  text-gray-700 dark:text-gray-400"
          alt="GateKeeper Logo"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold">Complete Captcha</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        Click below to confirm you are human
      </p>
      <ReCAPTCHA
        className="mt-8"
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        onChange={(value) => console.log(value)}
        // theme="dark" or "light" depending on theme
        theme="dark"
      />
      <button className="mt-8 w-full rounded border border-gray-700 bg-white py-2 px-4 text-center font-bold hover:bg-slate-200 dark:border-slate-100/50 dark:bg-dark-100 dark:hover:bg-slate-200 dark:hover:text-black">
        Continue
      </button>
    </div>
  );
}
