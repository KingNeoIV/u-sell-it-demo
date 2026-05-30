import { useBreakpoint } from "../hooks/useBreakpoint";

function ProductCardPlaceholder() {
  return (
    <div
      className="
            bg-slate-800 border border-white/10 rounded-xl 
            p-4 flex flex-col gap-3
            hover:shadow-lg hover:scale-[1.02] transition
        "
    >
      <div className="w-full h-40 bg-slate-700 rounded-lg animate-pulse" />

      <div className="flex flex-col gap-1">
        <div className="h-4 w-3/4 bg-slate-700 rounded animate-pulse" />
        <div className="h-3 w-1/2 bg-slate-700 rounded animate-pulse" />
      </div>

      <div className="h-5 w-1/3 bg-slate-700 rounded animate-pulse" />
    </div>
  );
}

export default function publicPage() {
  const breakpoint = useBreakpoint();

  let itemCount = 10; // mobile
  if (breakpoint === "phone-landscape") itemCount = 9;
  if (breakpoint === "desktop") itemCount = 24;

  return (
    <div className="px-4 py-6 laptop:px-10 desktop:px-16">
      <h1 className="text-xl laptop:text-2xl font-bold text-white mb-6">
        Products
      </h1>

      <div
        className="
                grid 
                grid-cols-2 
                gap-4

                phone-landscape:grid-cols-3
                tablet:grid-cols-4
                laptop:grid-cols-5
                desktop:grid-cols-6
            "
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <ProductCardPlaceholder key={i} />
        ))}
      </div>
    </div>
  );
}
