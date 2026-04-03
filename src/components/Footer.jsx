import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C3F] text-gray-300 mt-16">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Legal Olympiad</h2>
          <p className="text-sm leading-relaxed">
            A platform empowering law students through competitions,
            internships, and real-world legal exposure.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-yellow-400">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/webinars" className="hover:text-yellow-400">
                Webinars
              </Link>
            </li>
            <li>
              <Link to="/rankings" className="hover:text-yellow-400">
                Rankings
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 mb-4">
            <li>
              <Link to="/news" className="hover:text-yellow-400">
                News
              </Link>
            </li>
            <li>
              <Link to="/podcasts" className="hover:text-yellow-400">
                Podcasts
              </Link>
            </li>
            <li>
              <Link to="/highlights" className="hover:text-yellow-400">
                Highlights
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <button className="hover:text-yellow-400">
              <FaFacebook />
            </button>
            <button className="hover:text-yellow-400">
              <FaLinkedin />
            </button>
            <button className="hover:text-yellow-400">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 Legal Olympiad. All rights reserved.
      </div>
    </footer>
  );
}
