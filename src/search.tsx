import { SearchResults } from "./search-results";
import { useSearch } from "./hooks/use-search";
import { SearchControls, ErrorMessage } from "./search-components";

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
