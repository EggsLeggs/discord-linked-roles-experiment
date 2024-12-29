//Discord x GateKeeper Linked Roles:
// If the user hasn't completed GateKeeper Auth before then send link to webpage
// If possible have it automatically sign in but if not have 3 steps: 1. sign in 2. captcha 3. submit
// Add linked role for verified users

// if the client doesn't have a valid token then show the discord page
// else show the captcha page

import SideBar from "./components/SideBar";
import { MoonIcon } from "@heroicons/react/24/outline";
import React from "react";
import Captcha from "./pages/Captcha";
import Discord from "./pages/Discord";
import Submit from "./pages/Submit";
import Progress from "./components/Progress";
import Error from "./pages/Error";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="grid h-screen grid-cols-3 dark:bg-dark-200 dark:text-white">
        <div className="p-4">
          <SideBar />
        </div>
        <div className="col-span-2 flex h-full w-full flex-col items-center justify-center p-4 text-center">
          {}
          {
            // check for valid token
          }
          {/* <Discord /> */}
          {/* <Captcha /> */}
          <Submit />
          {/* <Error /> */}
          {/* <Progress className="place-self-end" /> */}
        </div>
      </div>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 rounded-md border border-gray-700 p-3 hover:bg-slate-200 dark:border-slate-100/50 dark:text-white dark:hover:text-black"
      >
        <MoonIcon className="h-7 w-7" />
      </div>
    </div>
  );
}

export default App;
