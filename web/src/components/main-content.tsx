type MainContentProps = {
  children: React.ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return <main className="container mx-auto px-4 py-8">{children}</main>;
}
