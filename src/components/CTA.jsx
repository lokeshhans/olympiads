import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-16 text-center">
      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Legal Journey Today
        </h2>

        <p className="text-gray-200 mb-8">
          Join competitions, attend webinars, and track your growth on Legal
          Olympiad.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/blogs"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Explore Programs
          </Link>

          <Link
            to="/rankings"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            View Rankings
          </Link>
        </div>
      </div>
    </section>
  );
}
