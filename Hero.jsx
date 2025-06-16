import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1920&q=80",
    headline: "Summer Collection 2025",
    cta: { label: "Shop now", to: "/category/women" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1561808849-2459d7ab9bae?auto=format&fit=crop&w=1920&q=80",
    headline: "Linen Lounge",
    cta: { label: "Explore", to: "/category/men" },
  },
];

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden md:h-[75vh]">
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${s.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 4, duration: 1.2 }}
        />
      ))}
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/30 text-center text-white backdrop-blur-sm">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          {slides[0].headline}
        </h1>
        <Link
          to={slides[0].cta.to}
          className="rounded-full bg-white px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
        >
          {slides[0].cta.label}
        </Link>
      </div>
    </div>
  );
}
