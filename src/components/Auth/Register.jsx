import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Register component for user registration
 */
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    // Validate password match
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    // Validate password strength
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      const { data, error } = await signUp(email, password);

      if (error) throw error;

      setSuccessMessage(
        "Registration successful! Please check your email for verification.",
      );

      // Redirect to login after a delay
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "Failed to create an account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto my-12 p-8 bg-white dark:bg-brown-dark shadow-lg rounded-lg"
      data-oid="v5jvqx0"
    >
      <h1
        className="text-2xl font-bold text-center mb-6 text-brown-dark dark:text-beige-light"
        data-oid="8_jpbf8"
      >
        Create an Account
      </h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
          data-oid="p.1.r3k"
        >
          <span className="block sm:inline" data-oid="pdm7gy1">
            {error}
          </span>
        </div>
      )}

      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
          role="alert"
          data-oid="97t6_v8"
        >
          <span className="block sm:inline" data-oid="-2z9mli">
            {successMessage}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" data-oid="nphy2ja">
        <div data-oid="4lda9io">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brown dark:text-beige-medium mb-1"
            data-oid="3p10_-z"
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
            data-oid="hoj0ziu"
          />
        </div>

        <div data-oid="r:zkz74">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-brown dark:text-beige-medium mb-1"
            data-oid="fj7i5w9"
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
            data-oid="_jyczr7"
          />

          <p
            className="mt-1 text-xs text-brown-light dark:text-beige-medium"
            data-oid="bv7n7kz"
          >
            Password must be at least 6 characters
          </p>
        </div>

        <div data-oid="4v0em6m">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-brown dark:text-beige-medium mb-1"
            data-oid="33uji:b"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="input w-full"
            placeholder="••••••••"
            data-oid="cj1tzb9"
          />
        </div>

        <div className="flex items-center" data-oid="2s6f59z">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-taupe focus:ring-taupe border-gray-300 rounded"
            data-oid="r3lma1q"
          />

          <label
            htmlFor="terms"
            className="ml-2 block text-sm text-brown dark:text-beige-medium"
            data-oid="6sbv-m2"
          >
            I agree to the{" "}
            <a
              href="#"
              className="font-medium text-taupe hover:text-brown-dark dark:hover:text-beige-light"
              data-oid="j-tvs86"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-taupe hover:text-brown-dark dark:hover:text-beige-light"
              data-oid="i9:.ss2"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <div data-oid="def9ig_">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex justify-center"
            data-oid="_1ub93j"
          >
            {loading ? (
              <span className="flex items-center" data-oid="ytvdhjs">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid=":lh362t"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid="j0m-.1-"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid="_upbvga"
                  ></path>
                </svg>
                Creating account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center" data-oid="464-s5y">
        <p
          className="text-sm text-brown dark:text-beige-medium"
          data-oid="zrixtwb"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-taupe hover:text-brown-dark dark:hover:text-beige-light"
            data-oid="mrcqsuf"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
