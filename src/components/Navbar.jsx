import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, LogOut } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <BookOpen
            className="text-blue-400"
            size={32}
          />

          <span className="text-2xl font-bold text-white tracking-wide">
            NoteKeeper
          </span>
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className={`transition ${
              location.pathname === "/"
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-blue-400"
            }`}
          >
            Home
          </Link>

          <Link
            to="/create"
            className={`transition ${
              location.pathname === "/create"
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-blue-400"
            }`}
          >
            Create Note
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;