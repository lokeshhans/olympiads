export default function About() {
  return (
    <div className="px-6 md:px-16 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        About Legal Olympiad
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-lg mb-10 max-w-3xl">
        Legal Olympiad is a structured learning and assessment platform designed
        for law students to enhance their practical and theoretical knowledge.
        It bridges the gap between academic learning and real-world legal exposure.
      </p>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To empower law students by providing opportunities in competitions,
            internships, and legal activities that build real-world skills.
          </p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become the leading platform for legal education, innovation,
            and competitive growth.
          </p>
        </div>

      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-5 border rounded-lg">
            Competitions & Olympiads
          </div>

          <div className="p-5 border rounded-lg">
            Internships & Opportunities
          </div>

          <div className="p-5 border rounded-lg">
            Webinars & Seminars
          </div>

          <div className="p-5 border rounded-lg">
            Blogs & Learning Resources
          </div>

          <div className="p-5 border rounded-lg">
            Rankings & Achievements
          </div>

          <div className="p-5 border rounded-lg">
            Podcasts & Discussions
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-900 text-white text-center py-10 rounded-lg">
        <h2 className="text-2xl mb-4">
          Join the Legal Learning Revolution
        </h2>
        <button type="button" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </div>

    </div>
  );
}