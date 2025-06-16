import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Category() {
  const { slug } = useParams();
  const filtered = products.filter((p) => p.category === slug);
  return (
    <section className="container my-12 space-y-6">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: slug }]} />
      <h1 className="text-3xl font-bold capitalize">{slug}</h1>
      <ProductGrid products={filtered} />
    </section>
  );
}
