import { X } from "lucide-react";
import { Link } from "react-router-dom";
export default function MobileMenu({ onClose, categories }) {
  return (
    <div className="flex h-full flex-col gap-8 overflow-y-auto">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">Menu</span>
        <button onClick={onClose}>
          <X />
        </button>
      </div>
      <nav className="flex flex-col gap-6">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/category/${c.slug}`}
            onClick={onClose}
            className="text-lg uppercase"
          >
            {c.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
