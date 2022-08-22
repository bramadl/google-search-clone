import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { useResultContext } from "../context/ResultContextProvider";

export const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  const location = useLocation();
  const navigate = useNavigate();

  const searchInput = useRef<HTMLInputElement | null>(null);

  const search = (e: React.KeyboardEvent) => {
    if (!searchTerm.trim().length) return;
    if (e.key === "Enter") {
      const path = location.pathname !== "/" ? location.pathname : "/search";
      navigate(`${path}?q=${searchTerm}`);
    }
  };

  useEffect(() => {
    if (searchInput.current) searchInput.current.focus();
  }, []);

  return (
    <div className="relative w-full group">
      <input
        ref={searchInput}
        className="w-full h-10 dark:bg-gray-50 border rounded-full shadow-sm outline-none p-6 text-black group-hover:shadow-lg transition ease-out duration-300"
        placeholder="Search or type URL"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => search(e)}
      />
      {!!searchTerm && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 text-2xl text-gray-500"
          type="button"
          onClick={() => setSearchTerm("")}
        >
          <MdClose />
        </button>
      )}
    </div>
  );
};
