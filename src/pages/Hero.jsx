import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-[550px] max-h-screen flex items-center bg-gradient-to-l   from-blue-900 to-blue-700 text-white px-6 md:px-16">
      {/* Container */}
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Future Legal Professionals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-200 mb-8 max-w-lg"
          >
            Participate in competitions, internships, and track your growth.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/blogs">
              <motion.button
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Explore Programs
              </motion.button>
            </Link>

            <Link to="/rankings">
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
                View Rankings
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <img
            src="/hero.webp"
            loading="eager"
            alt="Legal Illustration"
            className="w-full max-md  rounded-lg shadow-lg mb-10"
          />
        </div>
      </div>
    </section>
  );
}
