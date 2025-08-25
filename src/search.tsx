export function Search() {
  return (
    <div className="flex gap-4">
      <input
        placeholder="// ENTER SEARCH QUERY..."
        className="w-96 px-6 py-3 bg-gray-900 border-2 border-cyan-500 rounded-none 
                 text-cyan-300 placeholder-cyan-300/50 font-mono
                 focus:outline-none focus:border-cyan-300 focus:ring-4 
                 focus:ring-cyan-300/30 focus:animate-pulse"
      />
      <button
        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
                 border-2 border-cyan-300 text-white font-bold font-mono
                 hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-cyan-300 
                 transition-all duration-200 hover:animate-none"
      >
        [ INITIATE ]
      </button>
    </div>
  );
}
