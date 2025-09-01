import { SearchResults } from "./search-results";
import { useSearch } from "./hooks/use-search";
import { SearchControls } from "./components/search-controls";
import { ErrorMessage } from "./components/error-message";

export function Search() {
  const { query, setQuery, state, handleSearch } = useSearch();

  return (
    <div>
      <SearchControls
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />

      {state.status === "error" && <ErrorMessage message={state.error} />}

      <SearchResults
        results={state.status === "success" ? state.results : []}
        isLoading={state.status === "loading"}
      />
    </div>
  );
}
