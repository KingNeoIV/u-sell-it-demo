export default function ProductCardPlaceholder() {
  return (
    <div className="
      bg-slate-800 border border-white/10 rounded-xl 
      p-4 flex flex-col gap-3
      hover:shadow-lg hover:scale-[1.02] transition
    ">
      <div className="w-full h-40 bg-slate-700 rounded-lg animate-pulse" />

      <div className="flex flex-col gap-1">
        <div className="h-4 w-3/4 bg-slate-700 rounded animate-pulse" />
        <div className="h-3 w-1/2 bg-slate-700 rounded animate-pulse" />
      </div>

      <div className="h-5 w-1/3 bg-slate-700 rounded animate-pulse" />
    </div>
  );
}
