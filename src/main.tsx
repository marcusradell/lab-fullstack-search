import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Search } from "./features/search";
import { TopNav } from "./components/top-nav";
import { AppContainer } from "./components/app-container";
import { MainContent } from "./components/main-content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer>
      <TopNav />
      <MainContent>
        <Search />
      </MainContent>
    </AppContainer>
  </StrictMode>,
);
