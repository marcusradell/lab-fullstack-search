import { type ReactNode } from "react";

type SearchResultsProps = {
  results: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  isLoading?: boolean;
};

export function SearchResults({ results, isLoading = false }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-6 border-2 border-cyan-500 p-6 bg-gray-900">
        <div className="text-cyan-300 font-mono">[ PROCESSING QUERY... ]</div>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 border-2 border-cyan-500 p-6 bg-gray-900">
      <h2 className="text-cyan-300 font-mono mb-4">[ SEARCH RESULTS ]</h2>
      <ul className="space-y-4">
        {results.map((result) => (
          <li key={result.id} className="border border-cyan-500/30 p-4">
            <h3 className="text-cyan-300 font-mono">{result.title}</h3>
            <p className="text-gray-300 mt-2">{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
