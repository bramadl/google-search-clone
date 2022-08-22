import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./context/ResultContextProvider";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </BrowserRouter>
);
