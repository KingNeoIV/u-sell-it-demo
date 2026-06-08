import ProductCard from "../components/products/ProductCard";
import ProductCardPlaceholder from "../components/products/ProductCardPlaceholder";
import AdSlideshow from "../components/ads/AdSlideshow";
import { useProducts } from "../hooks/useProducts";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function publicPage() {
  const { products, loading } = useProducts();
  const breakpoint = useBreakpoint();

  let itemCount = 10;
  if (breakpoint === "sm") itemCount = 9;
  if (breakpoint === "xl") itemCount = 24;

  return (
    <div className="px-4 py-6 md:px-8 lg:px-10 xl:px-16">

      {/* Ad Slideshow */}
      <AdSlideshow />

      <h1 className="text-xl lg:text-2xl font-bold text-white mb-6">
        Products
      </h1>

      <div className="
        grid 
        grid-cols-2 
        gap-4

        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
      ">
        {loading &&
          Array.from({ length: itemCount }).map((_, i) => (
            <ProductCardPlaceholder key={i} />
          ))
        }

        {!loading &&
          products.slice(0, itemCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
}
