type NavContentProps = {
  children: React.ReactNode;
};

export function NavContent({ children }: NavContentProps) {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {children}
    </div>
  );
}
