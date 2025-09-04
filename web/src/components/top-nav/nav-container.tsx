type NavContainerProps = {
  children: React.ReactNode;
};

export function NavContainer({ children }: NavContainerProps) {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-900 to-pink-900 border-b-2 border-cyan-300 shadow-lg">
      {children}
    </nav>
  );
}
