export default function PublicLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-xl gradient-sol animate-pulse flex items-center justify-center">
          <span className="text-white font-bold text-sm">ST</span>
        </div>
        <p className="text-sm text-white/40">Loading...</p>
      </div>
    </div>
  );
}
