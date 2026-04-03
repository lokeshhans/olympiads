import { blogs } from "../data/data";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <div className="px-6 md:px-16 py-10 bg-gray-50 min-h-screen">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-1">
          Latest Insights
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
          Blogs & Articles
        </h1>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col group cursor-pointer"
          >
            {/* Image with zoom on hover */}
            <div className="overflow-hidden h-48">
              <img
                src={blog.img}
                loading="lazy"
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">

              {/* Tag */}
              {blog.tag && (
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full w-fit mb-3">
                  {blog.tag}
                </span>
              )}

              <h2 className="text-lg font-semibold text-gray-800 mb-2 leading-snug group-hover:text-blue-900 transition-colors">
                {blog.title}
              </h2>

              <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">
                {blog.desc}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                {blog.author && (
                  <span className="text-xs text-gray-400">{blog.author}</span>
                )}
                <button
                  type="button"
                  className="text-blue-700 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <span>→</span>
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}