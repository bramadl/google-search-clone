import React from "react";
import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";

import { Search } from "./Search";
import { Links } from "./Links";

type NavbarProps = {
  darkTheme: boolean;
  setDarkTheme: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="border-b dark:border-gray-700 border-gray-200">
      <div className="flex items-start p-6 pb-0">
        <div className="flex-shrink-0 md:w-40">
          <Link
            className="w-full h-full flex items-center justify-start"
            to="/"
          >
            <span className="mt-1 font-bold text-3xl">
              <span className="text-blue-500">G</span>
              <span className="text-green-500">o</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">g</span>
              <span className="text-blue-500">l</span>
              <span className="text-red-500">e</span>
            </span>
          </Link>
        </div>
        <div className="hidden md:block w-full md:max-w-[640px]">
          <Search />
          <Links />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button
            className={`
              mt-2 p-1 text-2xl dark:text-gray-900 dark:bg-gray-50 bg-white border rounded-full hover:shadow-lg transition ease-out duration-300
              ${darkTheme ? "rotate-180" : "rotate-0"}
            `}
            type="button"
            onClick={() => setDarkTheme()}
          >
            <CgDarkMode />
          </button>
        </div>
      </div>
      <div className="block md:hidden p-6 pb-0">
        <Search />
        <Links />
      </div>
    </div>
  );
};
