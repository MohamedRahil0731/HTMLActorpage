import { Link } from "react-router-dom";
export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-primary-light">
      <ol className="flex items-center gap-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {item.to ? (
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {idx < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
