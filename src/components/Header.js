import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="h-16 bg-blue-400 flex flex-row justify-center items-center">
      <div className="w-9/12 h-full flex flex-row justify-between items-center">
        <div></div>
        <h2 className="text-white font-bold">Market</h2>
        <div className="bg-blue-600 flex flex-row items-center justify-center h-full px-8 space-x-2">
          <LockClosedIcon className="h-4 w-4 text-white" />{" "}
          <span className="text-sm text-white">$ 39,97</span>
        </div>
      </div>
    </header>
  );
};

export default Header;