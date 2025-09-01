import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Search } from "./features/search";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Search />
  </StrictMode>,
);
