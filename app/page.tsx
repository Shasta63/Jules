import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getInventory } from "@/lib/inventory";

export default function Home() {
  const inventory = getInventory();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-radial-[at_50%_50%] from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white leading-[1.1]">
            Premium Digital <span className="text-zinc-500">Embroidery</span> Designs
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            High-quality, instantly downloadable files to elevate your creative projects.
            Beautiful designs for every style, ready for your next masterpiece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#collection"
              className="w-full sm:w-auto px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Explore the Collection
            </Link>
            <a
              href="https://www.etsy.com/shop/CleverThreadsDesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black border-2 border-black dark:bg-black dark:text-white dark:border-white rounded-full font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Shop Clever Threads
            </a>
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
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
            {inventory.map((product, index) => (
              <ProductCard
                key={index}
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
    </div>
  );
}
