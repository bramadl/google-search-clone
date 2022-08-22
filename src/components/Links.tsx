import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/image", text: "Images" },
  { url: "/video", text: "Videos" },
  { url: "/news", text: "News" },
];

export const Links = () => {
  const [searchParams] = useSearchParams();
  
  return (
    <div className="flex items-center gap-6 mt-4">
      {links.map(({ text, url }) => (
        <NavLink
          key={url}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-blue-700 dark:text-blue-300 border-blue-700 dark:border-blue-300"
                : "border-transparent text-gray-500"
            } border-b-2 pb-2`
          }
          to={`${url}?q=${searchParams.get("q")}`}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
