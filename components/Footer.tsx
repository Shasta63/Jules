export default function Footer() {
  return (
    <footer className="border-t py-8 bg-white dark:bg-black dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Clever Threads LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
