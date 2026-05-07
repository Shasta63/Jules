import Link from "next/link";
import FeaturedDesigns from "@/components/FeaturedDesigns";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 px-6 text-center bg-[url('/banner.jpg')] bg-cover bg-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

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

      <FeaturedDesigns />
    </div>
  );
}
