import Hero from "../components/Hero";
import CategoryBanner from "../components/CategoryBanner";
import ProductGrid from "../components/ProductGrid";
import categories from "../data/categories";
import products from "../data/products";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container my-12 space-y-8">
        <h2 className="text-2xl font-semibold">Shop by category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.slice(0, 5).map((c) => (
            <CategoryBanner key={c.slug} category={c} />
          ))}
        </div>
      </section>

      <section className="container my-12 space-y-8">
        <h2 className="text-2xl font-semibold">Trending now</h2>
        <ProductGrid products={products.slice(0, 8)} />
      </section>
    </>
  );
}
