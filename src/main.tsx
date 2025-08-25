import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

<Search/>
function Search() {
  return (
    <>
      <input />
      <button>Search</button>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Search />
  </StrictMode>,
);
