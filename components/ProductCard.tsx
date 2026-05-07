import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
}

export default function ProductCard({ title, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Product Image */}
      <div className="aspect-square relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400">
            <svg
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-black/80 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm dark:bg-white/80 dark:text-black">
            ${price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {description}
        </p>

        <div className="mt-6">
          <a
            href="https://www.etsy.com/shop/CleverThreadsDesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Buy on Etsy
          </a>
        </div>
      </div>
    </div>
  );
}
