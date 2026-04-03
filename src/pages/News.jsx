import { news } from "../data/data";

export default function News() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        News & Updates
      </h1>

      <p className="text-gray-600 mb-10">
        Stay updated with the latest announcements and activities.
      </p>

      {/* Timeline */}
      <div className="relative border-l-4 border-blue-900 ml-4">

        {news.map((item, index) => (
          <div key={index} className="mb-10 ml-6">

            {/* Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full text-white text-xs">
              ●
            </span>

            {/* Card */}
            <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">

              <p className="text-sm text-gray-500 mb-1">
                {item.date}
              </p>

              <h2 className="text-lg font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}