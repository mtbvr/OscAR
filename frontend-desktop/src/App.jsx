import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useAuthStore } from "./common/store/authStore";
import { currentUser } from "./api/services/auth.api";

import Home from "./pages/home";
import Authentification from "./pages/authentification";
import ProtectedRoute from "./common/components/security/ProtectedRoute";
import Notification from "./common/components/notification/Notification";

export default function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  useEffect(() => {
    if (!useAuthStore.getState().isAuthenticated) {
      return;
    }
    currentUser("/auth/me")
      .then((user) => setUser(user))
      .catch(() => clearUser());
  }, []);

  return (
    <Router>
      <Notification />
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