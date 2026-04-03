import { podcasts } from "../data/data";
import { motion } from "framer-motion";

export default function Podcasts() {
  return (
    <div className="px-6 md:px-16 py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Legal Podcasts
        </h1>

        <p className="text-gray-600 mb-10">
          Listen to expert discussions and legal insights anytime.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.map((podcast, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={podcast.img}
                alt={podcast.title}
                className="w-full h-48 object-cover"
              />

              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white p-3 rounded-full shadow text-xl">
                  ▶
                </span>
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{podcast.title}</h2>

              <p className="text-gray-600 text-sm mb-2">{podcast.speaker}</p>

              <p className="text-sm text-gray-500 mb-4">
                Duration: {podcast.duration}
              </p>

              {/* Audio */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
