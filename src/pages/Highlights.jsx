import { highlights } from "../data/data";

export default function Highlights() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Student & College Highlights
      </h1>

      <p className="text-gray-600 mb-10">
        Celebrating achievements, participation, and success stories.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              loading="lazy"
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              {/* Badge */}
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                {item.type}
              </span>

              <h2 className="text-lg font-semibold mt-2 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-3">
                {item.desc}
              </p>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}