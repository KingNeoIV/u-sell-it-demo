import type { Product } from "../../types/Product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="
      bg-slate-800 border border-white/10 rounded-xl 
      p-4 flex flex-col gap-3
      hover:shadow-lg hover:scale-[1.02] transition
    ">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="flex flex-col gap-1">
        <h2 className="text-white font-semibold text-sm truncate">
          {product.title}
        </h2>
        <p className="text-gray-400 text-xs truncate">
          {product.category?.name}
        </p>
      </div>

      <p className="text-yellow-400 font-bold text-lg">
        ${product.price}
      </p>
    </div>
  );
}
