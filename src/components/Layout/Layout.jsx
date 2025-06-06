import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen" data-oid="103tn.7">
      <Navbar data-oid="kw9164a" />
      <main className="flex-grow pt-16" data-oid="-y7t93w">
        {children}
      </main>
      <Footer data-oid="r2dlnw-" />
    </div>
  );
};

export default Layout;
