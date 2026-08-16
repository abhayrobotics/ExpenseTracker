const LoadingSpinner = () => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex items-center justify-center mt-2"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-3 border-purple-200 border-t-purple-600" />
    </div>
  );
};

export default LoadingSpinner;