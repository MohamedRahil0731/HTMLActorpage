import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found.</p>;
  return (
    <section className="container my-12 grid gap-10 md:grid-cols-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl object-cover"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl">₹{product.price}</p>
        <button
          onClick={() => dispatch({ type: "ADD", payload: product })}
          className="rounded-full bg-primary px-6 py-3 text-white hover:bg-accent"
        >
          Add to bag
        </button>
        <p className="text-sm text-primary-light">
          {product.description}
        </p>
      </div>
    </section>
  );
}
