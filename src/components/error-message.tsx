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
