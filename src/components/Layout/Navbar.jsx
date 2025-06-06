import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../Universal/ThemeToggle";
import { useAuth } from "../../contexts/AuthContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const { user, isAdmin, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-brown-dark/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
      data-oid=":qx9l2k"
    >
      <div className="container mx-auto px-4 md:px-6" data-oid="lfqg14t">
        <div className="flex items-center justify-between" data-oid="dwpardx">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-oid="64k.-ls">
            <span
              className="text-2xl font-heading font-bold text-brown-dark dark:text-beige-light"
              data-oid="_cneqdg"
            >
              UrbanEdge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-oid="ewso4w_"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-taupe dark:text-beige-medium"
                    : "text-brown-dark dark:text-beige-light hover:text-taupe dark:hover:text-beige-medium"
                }`}
                data-oid="_ljcvga"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="hidden md:flex items-center space-x-4"
            data-oid="b77r0fw"
          >
            {user ? (
              <div className="relative" data-oid="hao9b2w">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 font-medium text-brown-dark dark:text-beige-light hover:text-taupe dark:hover:text-beige-medium transition-colors"
                  data-oid="..0-xk3"
                >
                  <span data-oid="ymn6_-b">My Account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="fiy3xkb"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                      data-oid="w633ms2"
                    />
                  </svg>
                </button>

                {userMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-brown-dark rounded-md shadow-lg py-1 z-10"
                    data-oid="wjny_j9"
                  >
                    <div
                      className="px-4 py-2 text-sm text-brown dark:text-beige-medium border-b border-beige-medium/20 dark:border-brown/20"
                      data-oid="qsaxuqe"
                    >
                      {user.email}
                    </div>

                    {isAdmin && (
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-sm text-brown dark:text-beige-medium hover:bg-beige-light/20 dark:hover:bg-brown/20"
                        onClick={() => setUserMenuOpen(false)}
                        data-oid="or7qy_a"
                      >
                        Admin Dashboard
                      </Link>
                    )}

                    <Link
                      to="/client/dashboard"
                      className="block px-4 py-2 text-sm text-brown dark:text-beige-medium hover:bg-beige-light/20 dark:hover:bg-brown/20"
                      onClick={() => setUserMenuOpen(false)}
                      data-oid="mqghem7"
                    >
                      My Properties
                    </Link>

                    <button
                      onClick={() => {
                        handleSignOut();
                        setUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-beige-light/20 dark:hover:bg-brown/20"
                      data-oid="7tsp5y1"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium text-brown-dark dark:text-beige-light hover:text-taupe dark:hover:text-beige-medium transition-colors"
                  data-oid="gx1upn3"
                >
                  Login
                </Link>
                <Link to="/register" className="btn-primary" data-oid="asobr0r">
                  Register
                </Link>
              </>
            )}
            <ThemeToggle className="shadow-md" data-oid="4ig2fbc" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brown-dark dark:text-beige-light"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-oid="xbke2y4"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" data-oid="d0h2c_n" />
            ) : (
              <Bars3Icon className="h-6 w-6" data-oid="th5zdla" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-brown-dark shadow-lg"
          data-oid=":d:galn"
        >
          <div
            className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            data-oid="kd32jmz"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 font-medium ${
                  location.pathname === link.path
                    ? "text-taupe dark:text-beige-medium"
                    : "text-brown-dark dark:text-beige-light"
                }`}
                data-oid="0ddncdt"
              >
                {link.name}
              </Link>
            ))}
            <div
              className="flex flex-col space-y-3 pt-4 border-t border-beige-medium dark:border-brown"
              data-oid="48o2bwf"
            >
              {user ? (
                <>
                  <div
                    className="py-2 text-sm text-brown dark:text-beige-medium"
                    data-oid="tvprcn-"
                  >
                    {user.email}
                  </div>

                  {isAdmin && (
                    <Link
                      to="/admin/dashboard"
                      className="py-2 font-medium text-brown-dark dark:text-beige-light"
                      data-oid="qpek-1g"
                    >
                      Admin Dashboard
                    </Link>
                  )}

                  <Link
                    to="/client/dashboard"
                    className="py-2 font-medium text-brown-dark dark:text-beige-light"
                    data-oid="w9x7zni"
                  >
                    My Properties
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="py-2 text-left font-medium text-red-600 dark:text-red-400"
                    data-oid="orvyudh"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-2 font-medium text-brown-dark dark:text-beige-light"
                    data-oid="h1ex7gf"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn-primary text-center"
                    data-oid="m044nwp"
                  >
                    Register
                  </Link>
                </>
              )}
              <div
                className="flex items-center justify-between mt-4 pt-4 border-t border-beige-medium dark:border-brown"
                data-oid="-qoqrb2"
              >
                <ThemeToggle className="shadow-md" data-oid="mh.kh_c" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
