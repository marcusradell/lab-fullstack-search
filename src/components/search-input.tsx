type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export function SearchInput({ value, onChange, onSearch }: SearchInputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSearch();
        }
      }}
      placeholder="// ENTER SEARCH QUERY..."
      className="w-96 px-6 py-3 bg-gray-900 border-2 border-cyan-500 rounded-none 
               text-cyan-300 placeholder-cyan-300/50 font-mono
               focus:outline-none focus:border-cyan-300 focus:ring-4 
               focus:ring-cyan-300/30"
    />
  );
}
