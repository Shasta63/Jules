import Link from "next/link";

export default function Home() {
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
              href="https://crowsknot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black border-2 border-black dark:bg-black dark:text-white dark:border-white rounded-full font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Shop on Etsy
            </a>
          </div>
        </div>
      </section>

      {/* Collection Section Placeholder */}
      <section id="collection" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 min-h-[50vh]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center animate-pulse">
                <span className="text-zinc-400">Embroidery Preview {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
