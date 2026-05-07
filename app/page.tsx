import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black py-32 px-16">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left max-w-3xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to Clever Threads LLC
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          We showcase premium digital embroidery files designed to elevate your creative projects.
          Browse our collection and find your next favorite design.
        </p>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="https://crowsknot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Etsy Shop
          </a>
          <Link href="/gallery" className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]">
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
