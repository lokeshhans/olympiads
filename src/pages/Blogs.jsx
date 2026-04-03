import { blogs } from "../data/data";

export default function Blogs() {

  

  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Blogs & Articles
      </h1>


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={blog.img}
              loading="lazy"
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {blog.desc}
              </p>

              <button type="button" className="text-blue-900 font-semibold">
                Read More →
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}