type SearchButtonProps = {
  onClick: () => void;
};

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 
               border-2 border-cyan-300 text-white font-bold font-mono
               hover:shadow-[0_0_15px] hover:shadow-cyan-300 
               transition-all duration-200"
    >
      [ SEARCH ]
    </button>
  );
}
