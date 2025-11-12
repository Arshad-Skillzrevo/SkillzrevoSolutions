export const metadata = {
  title: "Page Not Found - SkillzRevo",
  description: "The page you’re looking for isn’t available. Return to SkillzRevo.com and explore our programs.",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 px-6 text-center">
      <h1 className="text-[120px] md:text-[160px] font-extrabold text-blue-600 leading-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      <p className="mt-4 text-gray-600 text-lg">
        The page you’re looking for might have been moved, renamed, or doesn’t exist.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          Go to Homepage
        </a>
        <a
          href="https://academy.skillzrevo.com"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
        >
          Visit Our Academy
        </a>
      </div>
    </section>
  );
}
