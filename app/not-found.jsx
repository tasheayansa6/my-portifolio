import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900 px-4">
      <h1 className="text-8xl font-extrabold text-accent mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-white/60 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:bg-accent/80 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </section>
  );
}
