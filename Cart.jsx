import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart: { items },
    dispatch,
  } = useCart();
  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  return (
    <section className="container my-12 space-y-8">
      <h1 className="text-3xl font-bold">Your shopping bag</h1>
      {items.length === 0 ? (
        <p>
          Your bag is empty – <Link to="/">continue shopping</Link>.
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i.id} className="flex items-center gap-4">
                <img
                  src={i.image}
                  alt={i.name}
                  className="h-20 w-20 rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="truncate font-medium">{i.name}</h4>
                  <p className="text-sm text-primary-light">
                    Qty: {i.qty} × ₹{i.price}
                  </p>
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: i.id })}
                  className="text-sm text-accent hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end text-xl font-semibold">
            Total: ₹{total}
          </div>
        </>
      )}
    </section>
  );
}
