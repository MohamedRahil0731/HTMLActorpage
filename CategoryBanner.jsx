import { Link } from "react-router-dom";
export default function CategoryBanner({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative block overflow-hidden rounded-2xl shadow hover:shadow-lg"
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 md:h-80"
      />
      <div className="absolute inset-0 flex items-end justify-center bg-black/30 p-4 text-white">
        <h3 className="text-xl font-semibold md:text-2xl">{category.name}</h3>
      </div>
    </Link>
  );
}
