import { motion } from "framer-motion";

// Animation Variants (Reusable)
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

export default function About() {
  return (
    <div className="px-6 md:px-16 py-12">

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl font-bold text-blue-900 mb-6"
      >
        About Legal Olympiad
      </motion.h1>

      {/* Intro */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="text-gray-700 text-lg mb-10 max-w-3xl"
      >
        Legal Olympiad is a structured learning and assessment platform designed
        for law students to enhance their practical and theoretical knowledge.
        It bridges the gap between academic learning and real-world legal exposure.
      </motion.p>

      {/* Mission + Vision */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8 mb-12"
      >

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="p-6 shadow rounded-lg bg-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To empower law students by providing opportunities in competitions,
            internships, and legal activities that build real-world skills.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="p-6 shadow rounded-lg bg-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become the leading platform for legal education, innovation,
            and competitive growth.
          </p>
        </motion.div>

      </motion.div>

      {/* Features Section */}
      <div className="mb-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-2xl font-bold mb-6"
        >
          What We Offer
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {[
            "Competitions & Olympiads",
            "Internships & Opportunities",
            "Webinars & Seminars",
            "Blogs & Learning Resources",
            "Rankings & Achievements",
            "Podcasts & Discussions"
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-5 border rounded-lg bg-white shadow-sm cursor-pointer"
            >
              {item}
            </motion.div>
          ))}

        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-900 text-white text-center py-10 rounded-lg"
      >
        <h2 className="text-2xl mb-4">
          Join the Legal Learning Revolution
        </h2>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5
          }}
          type="button"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Get Started
        </motion.button>
      </motion.div>

    </div>
  );
}