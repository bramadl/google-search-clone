import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";
import { useResultContext } from "../context/ResultContextProvider";

export const HomePage = () => {
  const { setSearchTerm, setResults } = useResultContext();
  
  useEffect(() => {
    setSearchTerm("");
    setResults(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[640px] mx-auto">
        <Link
          className="w-full h-full flex items-center justify-center"
          to="/"
        >
          <span className="mt-1 font-bold text-8xl">
            <span className="text-blue-500">G</span>
            <span className="text-green-500">o</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">g</span>
            <span className="text-blue-500">l</span>
            <span className="text-red-500">e</span>
          </span>
        </Link>
        <Search />
      </div>
    </div>
  );
};
