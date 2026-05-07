import ProductCard from "./ProductCard";
import { getInventory } from "@/lib/getInventory";

export default function FeaturedDesigns() {
  const inventory = getInventory();

  return (
    <section id="collection" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Designs
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Discover our most popular embroidery motifs, ready for instant download.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {inventory.map((product) => (
            <ProductCard
              key={product.Title}
              title={product.Title}
              description={product.Description}
              price={product.Price}
              imageUrl={product.ImageURL}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.etsy.com/shop/CleverThreadsDesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-black hover:underline dark:text-white"
          >
            View entire collection on Etsy
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
