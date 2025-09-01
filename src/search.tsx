import { SearchResults } from "./search-results";
import { useSearch } from "./hooks/use-search";

export function Search() {
  const { query, setQuery, state, handleSearch } = useSearch();

  return (
    <div>
      <div className="flex gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="// ENTER SEARCH QUERY..."
          className="w-96 px-6 py-3 bg-gray-900 border-2 border-cyan-500 rounded-none 
                   text-cyan-300 placeholder-cyan-300/50 font-mono
                   focus:outline-none focus:border-cyan-300 focus:ring-4 
                   focus:ring-cyan-300/30"
        />
        <button
          onClick={handleSearch}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
                   border-2 border-cyan-300 text-white font-bold font-mono
                   hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-cyan-300 
                   transition-all duration-200 hover:animate-none"
        >
          [ INITIATE ]
        </button>
      </div>

      {state.status === "error" && (
        <div className="mt-4 p-4 border-2 border-red-500 bg-red-900/50 text-red-100 font-mono shadow-lg shadow-red-900/50">
          <div className="font-bold mb-1 text-white">[ ERROR ]</div>
          <div className="text-red-50">{state.error}</div>
        </div>
      )}

      <SearchResults
        results={state.status === "success" ? state.results : []}
        isLoading={state.status === "loading"}
      />
    </div>
  );
}
