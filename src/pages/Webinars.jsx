import { webinars } from "../data/data";

export default function Webinars() {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Webinars & Seminars
      </h1>

      <p className="text-gray-600 mb-10">
        Join expert-led sessions and enhance your legal knowledge.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {webinars.map((webinar, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <img
              src={webinar.img}
              loading="lazy"
              alt={webinar.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              {/* Status */}
              <span className={`text-xs px-2 py-1 rounded ${
                webinar.status === "Live"
                  ? "bg-red-100 text-red-600"
                  : webinar.status === "Upcoming"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-200 text-gray-600"
              }`}>
                {webinar.status}
              </span>

              <h2 className="text-lg font-semibold mt-2 mb-2">
                {webinar.title}
              </h2>

              <p className="text-gray-600 text-sm mb-2">
                {webinar.date} • {webinar.time}
              </p>

              <p className="text-sm mb-4">
                Speaker: <span className="font-medium">{webinar.speaker}</span>
              </p>

              <button type="button" className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                Register Now
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}