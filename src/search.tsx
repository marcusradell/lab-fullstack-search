import { useState } from "react";
import { SearchResults } from "./search-results";

export function Search() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<
    Array<{
      id: string;
      title: string;
      description: string;
    }>
  >([]);

  const handleSearch = () => {
    if (!query.trim()) return;

    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results
      setResults([
        {
          id: "1",
          title: "NEURAL NETWORK ARCHITECTURE",
          description:
            "Advanced pattern recognition system with multi-layered perceptrons.",
        },
        {
          id: "2",
          title: "QUANTUM ENCRYPTION PROTOCOL",
          description:
            "Secure communication channel using quantum entanglement principles.",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

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

      <SearchResults results={results} isLoading={isLoading} />
    </div>
  );
}
