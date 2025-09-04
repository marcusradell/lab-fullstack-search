type AppContainerProps = {
  children: React.ReactNode;
};

export function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {children}
    </div>
  );
}
