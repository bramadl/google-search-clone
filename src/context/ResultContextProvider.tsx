import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  ResultContextProviderProps,
  ResultContextType,
  Results,
} from "../types/ResultContextType";

const BASE_URL = "https://google-search3.p.rapidapi.com/api/v1";
const ResultContext = createContext<ResultContextType>({});

export const ResultContextProvider: React.FC<ResultContextProviderProps> = ({
  children,
}) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [results, setResults] = useState<Results>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getResults = async (type: string) => {
    setIsLoading(true);

    const response = await fetch(`${BASE_URL}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  useEffect(() => {
    const searchParam = searchParams.get("q");
    if (searchParam) {
      setSearchTerm(searchParam);
      getResults(`${location.pathname}/q=${searchParam}&num=100`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, searchParams]);

  return (
    <ResultContext.Provider
      children={children}
      value={{
        isLoading,
        results,
        setResults,
        getResults,
        searchTerm,
        setSearchTerm,
      }}
    />
  );
};

export const useResultContext = () => useContext(ResultContext);
