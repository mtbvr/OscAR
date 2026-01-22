import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Authentification from "./pages/authentification";
import ProtectedRoute from "./common/components/security/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Route protégée */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Route publique */}
        <Route path="/authentification" element={<Authentification />} />

      </Routes>
    </Router>
  );
}