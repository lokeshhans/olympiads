import { highlights } from "../data/data";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Highlights() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
      >
        Student & College Highlights
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-10"
      >
        Celebrating achievements, participation, and success stories.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >

        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
          >

            {/* Image Wrapper */}
            <div className="overflow-hidden">
              <motion.img
                src={item.img}
                loading="lazy"
                alt={item.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <div className="p-4">

              {/* Badge */}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded"
              >
                {item.type}
              </motion.span>

              <h2 className="text-lg font-semibold mt-2 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {item.desc}
              </p>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>

            </div>

          </motion.div>
        ))}

      </motion.div>

    </div>
  );
} 