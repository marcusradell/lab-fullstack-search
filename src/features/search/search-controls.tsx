import { SearchInput } from "./search-input";
import { SearchButton } from "./search-button";

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
