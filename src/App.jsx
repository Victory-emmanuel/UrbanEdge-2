import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ErrorBoundary from "./components/UI/ErrorBoundary";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";

// Admin Components
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import PropertyForm from "./components/Admin/Properties/PropertyForm";

// Client Components
import ClientDashboard from "./components/Client/Dashboard/ClientDashboard";
import PropertyDetail from "./components/Client/Properties/PropertyDetail";

// Auth Components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// Components
import Layout from "./components/Layout/Layout";
import ChatbotWidget from "./components/UI/ChatbotWidget";

// Protected Route Component
const ProtectedRoute = ({ element, requireAdmin = false }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading)
    return (
      <div className="p-8 text-center" data-oid="b6_1:n.">
        Loading...
      </div>
    );

  if (!user) return <Navigate to="/login" data-oid="rm_msn5" />;

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" data-oid="c5np1xe" />;
  }

  return element;
};

function App() {
  return (
    <div
      className="min-h-screen bg-beige-light dark:bg-brown"
      data-oid="l8c0sp6"
    >
      <AuthProvider data-oid="domvwzb">
        <ErrorBoundary data-oid="rqks2..">
          <BrowserRouter data-oid="l52.uq9">
            <Layout data-oid="cwa0ggm">
              <main className="min-h-screen" data-oid="btsc9uh">
                <Routes data-oid="5k5uxad">
                  {/* Public Routes */}
                  <Route
                    path="/"
                    element={<HomePage data-oid="761utn1" />}
                    data-oid="q1f6vyd"
                  />

                  <Route
                    path="/properties"
                    element={<PropertiesPage data-oid="sxep:vc" />}
                    data-oid="7mxmljx"
                  />

                  <Route
                    path="/properties/:id"
                    element={<PropertyDetailPage data-oid="b-ixwmm" />}
                    data-oid="vk8du7j"
                  />

                  <Route
                    path="/services"
                    element={<ServicesPage data-oid="r8q53ka" />}
                    data-oid="2cncxeg"
                  />

                  <Route
                    path="/about"
                    element={<AboutPage data-oid="2prov1p" />}
                    data-oid="_t1cl2d"
                  />

                  <Route
                    path="/blog"
                    element={<BlogPage data-oid="u:h22.i" />}
                    data-oid="r66m7ky"
                  />

                  <Route
                    path="/blog/:id"
                    element={<BlogPostPage data-oid="nb.kh6-" />}
                    data-oid="d47w2k2"
                  />

                  <Route
                    path="/contact"
                    element={<ContactPage data-oid="008ztga" />}
                    data-oid="_6022s:"
                  />

                  {/* Client Dashboard Routes */}
                  <Route
                    path="/client/dashboard"
                    element={<ClientDashboard data-oid="7dxdq6f" />}
                    data-oid="ync3buj"
                  />

                  <Route
                    path="/client/properties/:id"
                    element={<PropertyDetail data-oid="rrc3caa" />}
                    data-oid=":pip163"
                  />

                  {/* Auth Routes */}
                  <Route
                    path="/login"
                    element={<Login data-oid="t:-:4u-" />}
                    data-oid="i5pyq8l"
                  />

                  <Route
                    path="/register"
                    element={<Register data-oid="ejh5uro" />}
                    data-oid="574:nc_"
                  />

                  {/* Admin Routes (Protected) */}
                  <Route
                    path="/admin/dashboard"
                    element={
                      <ProtectedRoute
                        element={<AdminDashboard data-oid="sf37yc2" />}
                        requireAdmin={true}
                        data-oid="arbx4tq"
                      />
                    }
                    data-oid="0wqz9jm"
                  />

                  <Route
                    path="/admin/properties/new"
                    element={
                      <ProtectedRoute
                        element={<PropertyForm data-oid="u5me5iz" />}
                        requireAdmin={true}
                        data-oid="52g-dq1"
                      />
                    }
                    data-oid="hkdzh_w"
                  />

                  <Route
                    path="/admin/properties/edit/:id"
                    element={
                      <ProtectedRoute
                        element={<PropertyForm data-oid="opawn42" />}
                        requireAdmin={true}
                        data-oid="0pd0-cl"
                      />
                    }
                    data-oid="ycv09ma"
                  />
                </Routes>
              </main>
            </Layout>
            <ChatbotWidget data-oid="obfv5a0" />
          </BrowserRouter>
        </ErrorBoundary>
      </AuthProvider>
    </div>
  );
}

export default App;
