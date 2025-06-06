import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * ProtectedRoute component that restricts access to authenticated users only
 * Optionally can require admin privileges
 * Redirects to login if not authenticated, or home if authenticated but not admin
 */
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  // Show nothing while authentication state is loading
  if (loading) {
    return (
      <div
        className="flex justify-center items-center min-h-screen"
        data-oid="f5upv2i"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-taupe"
          data-oid="piiemso"
        ></div>
      </div>
    );
  }

  // If user is not authenticated, redirect to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
        data-oid="z0n_41f"
      />
    );
  }

  // If route requires admin privileges but user is not admin, redirect to home
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace data-oid="k.xyd.r" />;
  }

  // User is authenticated and has required privileges, render the protected content
  return children;
};

export default ProtectedRoute;
