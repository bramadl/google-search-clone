import React, { useEffect } from "react";
import {
  Routes as Switch,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import { Results } from "./Results";

export const Routes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm } = useResultContext();

  useEffect(() => {
    if (location.pathname === "/search" && searchTerm === "") {
      navigate("/");
    }
  }, [location.pathname, navigate, searchTerm]);

  if (location.pathname === "/") {
    return <></>;
  }

  return (
    <div className="relative w-full flex-1 flex items-start p-6">
      <div className="hidden md:block flex-shrink-0 w-40" />
      <div className="w-full md:max-w-[640px]">
        <Switch>
          <Route path="/search" element={<Results />} />
          <Route path="/image" element={<Results />} />
          <Route path="/news" element={<Results />} />
          <Route path="/video" element={<Results />} />
        </Switch>
      </div>
    </div>
  );
};
