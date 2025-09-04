import { useState } from "react";
import { searchApi } from "../api/search-api";
import { type SearchState } from "../types";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<SearchState>({ status: "idle" });

  const handleSearch = async () => {
    if (!query.trim()) return;

    setState({ status: "loading" });

    try {
      const results = await searchApi.search(query);
      setState({ status: "success", results });
    } catch (err) {
      console.error("Search failed:", err);

      // Extract error message
      const errorMessage =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err && "message" in err
            ? String(err.message)
            : "An unknown error occurred";

      setState({ status: "error", error: errorMessage });
    }
  };

  return {
    query,
    setQuery,
    state,
    handleSearch,
  };
}
