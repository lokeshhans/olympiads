import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Webinars", path: "/webinars" },
    { name: "ranking", path: "/rankings" },
    { name: "about", path: "/about" },
    { name: "Podcasts", path: "/podcasts" },
  ];

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-900">Legal Olympiad</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium ${
                location.pathname === link.path
                  ? "text-yellow-500"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${
                location.pathname === link.path
                  ? "text-yellow-500"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="w-full mt-3 bg-blue-900 text-white py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
