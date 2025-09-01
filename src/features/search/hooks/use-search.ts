import { useState } from "react";
import { searchApi, type SearchResult } from "../api/search-api";

type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; results: SearchResult[] }
  | { status: "error"; error: string };

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

  // Derived values for backward compatibility
  const isLoading = state.status === "loading";
  const results = state.status === "success" ? state.results : [];
  const error = state.status === "error" ? state.error : null;

  return {
    query,
    setQuery,
    results,
    isLoading,
    error,
    state,
    handleSearch,
  };
}
