import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";

export default function AdBannerSlideshow() {
  const [slides, setSlides] = useState<Product[][]>([]);
  const [index, setIndex] = useState(0);

  // Fetch 3 slides of 5 products each
  useEffect(() => {
    async function load() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50");
      const data: Product[] = await res.json();

      const shuffled = [...data].sort(() => 0.5 - Math.random());

      const slide1 = shuffled.slice(0, 5);
      const slide2 = shuffled.slice(5, 10);
      const slide3 = shuffled.slice(10, 15);

      setSlides([slide1, slide2, slide3]);
    }
    load();
  }, []);

  // Desktop fade slideshow
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <div className="relative mb-10">

      {/* MOBILE: horizontal scroll of the SAME 5 banners */}
      <div className="block md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex min-w-[900px] snap-center px-2">
          <BannerGrid products={slides[index]} />
        </div>
      </div>

      {/* DESKTOP: fade slideshow */}
      <div className="hidden md:block relative h-[32rem] transition-all duration-700">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 transition-opacity duration-700
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          >
            <BannerGrid products={slide} />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition
              ${i === index ? "bg-white" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

/* FIXED 3‑COLUMN GRID — NEVER STACKS */
function BannerGrid({ products }: { products: Product[] }) {
  const [big, top1, top2, bottom1, bottom2] = products;

  return (
    <div className="grid grid-cols-3 gap-4 h-[28rem]">

      {/* BIG LEFT BANNER */}
      <div className="row-span-2 bg-slate-800 rounded-xl overflow-hidden relative">
        <img
          src={big.images[0]}
          alt={big.title}
          className="w-full h-full object-cover"
        />
      </div>

      <SmallBanner product={top1} />
      <SmallBanner product={top2} />
      <SmallBanner product={bottom1} />
      <SmallBanner product={bottom2} />
    </div>
  );
}

function SmallBanner({ product }: { product: Product }) {
  return (
    <div className="bg-slate-700 rounded-xl overflow-hidden relative">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
