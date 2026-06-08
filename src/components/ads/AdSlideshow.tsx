import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";

export default function AdSlideshow() {
  const [ads, setAds] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);

  // Fetch 3 random products to use as ads
  useEffect(() => {
    async function loadAds() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50");
      const data: Product[] = await res.json();

      // pick 3 random products
      const shuffled = data.sort(() => 0.5 - Math.random());
      setAds(shuffled.slice(0, 3));
    }

    loadAds();
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [ads]);

  if (ads.length === 0) return null;

  return (
    <div className="
        relative w-full h-52 sm:h-64 
        md:h-72 lg:h-80 xl:h-[42rem] 
        mb-6 overflow-hidden rounded-xl border border-white/10
    ">

      {ads.map((ad, i) => (
        <img
          key={ad.id}
          src={ad.images[0]}
          alt={ad.title}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4">
        <h2 className="text-white font-bold text-lg sm:text-xl truncate">
          {ads[index].title}
        </h2>
        <p className="text-gray-300 text-sm truncate">
          {ads[index].category.name}
        </p>
      </div>
    </div>
  );
}
