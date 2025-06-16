import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useCart } from "../context/CartContext";

const categories = [
  { name: "Women", slug: "women" },
  { name: "Men", slug: "men" },
  { name: "Divided", slug: "divided" },
  { name: "Baby & Kids", slug: "kids" },
  { name: "Home", slug: "home" },
];

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          H&M
        </Link>

        <nav className="hidden gap-6 md:flex">
          {categories.map((c) => (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) =>
                `text-sm uppercase ${isActive ? "text-accent" : "hover:text-accent"}`
              }
            >
              {c.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cart.items.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-xs text-white">
                {cart.items.length}
              </span>
            )}
          </Link>
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-white p-6 md:hidden"
          >
            <MobileMenu onClose={() => setOpen(false)} categories={categories} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
