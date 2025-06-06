import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Login component for user authentication
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if there's a redirect path in the location state
  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error } = await signIn(email, password);

      if (error) throw error;

      // Redirect to the previous page or home
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.message || "Failed to sign in. Please check your credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto my-12 p-8 bg-white dark:bg-brown-dark shadow-lg rounded-lg"
      data-oid="obeuerh"
    >
      <h1
        className="text-2xl font-bold text-center mb-6 text-brown-dark dark:text-beige-light"
        data-oid="132w7ni"
      >
        Sign In
      </h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
          data-oid="fslyanq"
        >
          <span className="block sm:inline" data-oid="_k4vzy0">
            {error}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" data-oid="8:f26f8">
        <div data-oid="oe7:eln">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brown dark:text-beige-medium mb-1"
            data-oid="iiu1fjv"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input w-full"
            placeholder="your@email.com"
            data-oid="wsm.h1q"
          />
        </div>

        <div data-oid="lpfr0kg">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-brown dark:text-beige-medium mb-1"
            data-oid=".qus69t"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input w-full"
            placeholder="••••••••"
            data-oid="6r-_kbn"
          />
        </div>

        <div className="flex items-center justify-between" data-oid="bo5m951">
          <div className="flex items-center" data-oid="rm8-e1i">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-taupe focus:ring-taupe border-gray-300 rounded"
              data-oid="kvsn_x."
            />

            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-brown dark:text-beige-medium"
              data-oid="wsp0lc9"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm" data-oid="qu5.a10">
            <a
              href="#"
              className="font-medium text-taupe hover:text-brown-dark dark:hover:text-beige-light"
              data-oid="mnien2h"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div data-oid="stb1tp8">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex justify-center"
            data-oid="thwuyuf"
          >
            {loading ? (
              <span className="flex items-center" data-oid="hw-a-k1">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid=".hggg4-"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid="ocfl8ef"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid="5vyik8y"
                  ></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center" data-oid="f7plz9j">
        <p
          className="text-sm text-brown dark:text-beige-medium"
          data-oid="iz4zip5"
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-taupe hover:text-brown-dark dark:hover:text-beige-light"
            data-oid="t-hot5r"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
