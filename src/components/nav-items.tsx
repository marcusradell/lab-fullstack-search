type NavItemsProps = {
  children: React.ReactNode;
};

export function NavItems({ children }: NavItemsProps) {
  return <div className="flex gap-6">{children}</div>;
}
