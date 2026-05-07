import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { getInventory } from "@/lib/getInventory";

export default function Home() {
  const inventory = getInventory();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 px-6 text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Clever Threads Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Premium Digital <span className="text-zinc-300">Embroidery</span> Designs
          </h1>

          <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            High-quality, instantly downloadable files to elevate your creative projects.
            Beautiful designs for every style, ready for your next masterpiece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#collection"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Explore the Collection
            </Link>
            <a
              href="https://www.etsy.com/shop/CleverThreadsDesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
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
    </div>
  );
}
