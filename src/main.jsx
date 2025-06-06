import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode data-oid="da71eaz">
    <AuthProvider data-oid="8g_k7fe">
      <App data-oid="gd9mu70" />
    </AuthProvider>
  </StrictMode>,
);
