import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { SearchResultPage } from "./pages/SearchResultPage";

const theme = localStorage.getItem("theme") as "dark" | "light";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(theme === "dark");

  const onSetDarkTheme = () => {
    setDarkTheme((prevDarkTheme) => {
      localStorage.setItem("theme", prevDarkTheme ? "light" : "dark");
      return !prevDarkTheme;
    });
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-neutral-800 dark:text-gray-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/*"
            element={
              <SearchResultPage
                darkTheme={darkTheme}
                setDarkTheme={onSetDarkTheme}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
