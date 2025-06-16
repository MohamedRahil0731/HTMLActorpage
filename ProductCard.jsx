import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div className="flex flex-col gap-2">
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition hover:scale-105"
        />
      </Link>
      <h4 className="truncate text-sm font-medium">{product.name}</h4>
      <span className="text-sm text-primary-light">₹{product.price}</span>
      <button
        onClick={() => dispatch({ type: "ADD", payload: product })}
        className="flex items-center gap-1 text-sm text-accent hover:underline"
      >
        <Plus className="h-4 w-4" /> Add
      </button>
    </div>
  );
}
