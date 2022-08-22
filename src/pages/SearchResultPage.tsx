import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Results } from "../components/Results";

type SearchResultPageProps = {
  darkTheme: boolean;
  setDarkTheme: () => void;
};

export const SearchResultPage: React.FC<SearchResultPageProps> = ({
  darkTheme,
  setDarkTheme,
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("q")) {
      navigate("/", {
        replace: true,
      });
    }
  });

  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Results />
      <Footer />
    </>
  );
};
