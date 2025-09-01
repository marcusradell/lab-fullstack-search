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

type SearchButtonProps = {
  onClick: () => void;
};

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
               border-2 border-cyan-300 text-white font-bold font-mono
               hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-cyan-300 
               transition-all duration-200 hover:animate-none"
    >
      [ INITIATE ]
    </button>
  );
}

type SearchControlsProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export function SearchControls({
  value,
  onChange,
  onSearch,
}: SearchControlsProps) {
  return (
    <div className="flex gap-4">
      <SearchInput value={value} onChange={onChange} onSearch={onSearch} />
      <SearchButton onClick={onSearch} />
    </div>
  );
}

type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-4 p-4 border-2 border-red-500 bg-red-900/50 text-red-100 font-mono shadow-lg shadow-red-900/50">
      <div className="font-bold mb-1 text-white">[ ERROR ]</div>
      <div className="text-red-50">{message}</div>
    </div>
  );
}
