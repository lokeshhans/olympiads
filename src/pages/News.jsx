import { news } from "../data/data";
import { motion } from "framer-motion";

// Variants
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
      staggerChildren: 0.2
    }
  }
};

export default function News() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
      >
        News & Updates
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-10"
      >
        Stay updated with the latest announcements and activities.
      </motion.p>

      {/* Timeline */}
      <div className="relative ml-4">

        {/* Animated Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount:0.4 }}
          className="absolute left-0 top-0 w-1 bg-blue-900 origin-top"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative mb-10 ml-6"
            >

              {/* Dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="absolute -left-[35px] flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full text-white text-xs"
              >
                ●
              </motion.span>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white shadow-md rounded-xl p-5 cursor-pointer"
              >
                <p className="text-sm text-gray-500 mb-1">
                  {item.date}
                </p>

                <h2 className="text-lg font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>

    </div>
  );
}