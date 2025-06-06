import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Header component with navigation and authentication controls
 */
const Header = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="bg-white shadow-md" data-oid="0jpw3_b">
      <div className="container mx-auto px-4 py-4" data-oid="2wc7-4e">
        <div className="flex justify-between items-center" data-oid="a9abb1r">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
            data-oid="1wtbapc"
          >
            UrbanEdge
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-oid="._-sfu7">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600"
              data-oid="_z2wsxf"
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-blue-600"
              data-oid="ogx2xod"
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600"
              data-oid="4.k5mc2"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600"
              data-oid="siqh._a"
            >
              Contact
            </Link>
          </nav>

          {/* Authentication Buttons - Desktop */}
          <div
            className="hidden md:flex items-center space-x-4"
            data-oid="y8vwtic"
          >
            {user ? (
              <div className="flex items-center space-x-4" data-oid="iv-5e3q">
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                    data-oid=":mv7m-v"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <div className="relative group" data-oid="to89_b4">
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                    data-oid="lg:vb45"
                  >
                    <span data-oid="095u2mg">My Account</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="25f0nyk"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="p7w5:t4"
                      />
                    </svg>
                  </button>
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block"
                    data-oid="mj_1ubk"
                  >
                    <div
                      className="px-4 py-2 text-sm text-gray-700 border-b"
                      data-oid=".dlob4z"
                    >
                      {user.email}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      data-oid="32bshbr"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600"
                  data-oid="buhka-u"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                  data-oid="-gurfn6"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-oid="8lt0:cj"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="3dqw85e"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="d_.8smg"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid=".d6dfzy"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t" data-oid="j2-gl-h">
            <nav className="flex flex-col space-y-4" data-oid="sls_er.">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="l1.9zmx"
              >
                Home
              </Link>
              <Link
                to="/properties"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="9gq871b"
              >
                Properties
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="di_a6sn"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
                data-oid="a:3wigg"
              >
                Contact
              </Link>

              {/* Authentication Links - Mobile */}
              {user ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin/dashboard"
                      className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md inline-block"
                      onClick={() => setMobileMenuOpen(false)}
                      data-oid="0gt5qa-"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <div className="pt-2 border-t" data-oid="p9o:s_o">
                    <div
                      className="px-2 py-2 text-sm text-gray-700"
                      data-oid="sl2ko3r"
                    >
                      {user.email}
                    </div>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-2 py-2 text-sm text-red-600 hover:text-red-800"
                      data-oid="vd8odmq"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <div
                  className="flex flex-col space-y-2 pt-2 border-t"
                  data-oid="goo-_w7"
                >
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="__66705"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="987yrpc"
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
