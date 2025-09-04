type NavItemProps = {
  text: string;
  isActive?: boolean;
};

export function NavItem({ text, isActive = false }: NavItemProps) {
  return (
    <button
      className={`font-mono px-4 py-2 transition-all duration-200 ${
        isActive
          ? "text-cyan-300 border-b-2 border-cyan-300"
          : "text-white hover:text-cyan-300"
      }`}
    >
      {text}
    </button>
  );
}
