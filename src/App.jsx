import React from "react";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}

      <main
  className={
    hideLayout
      ? ""
      : "container mx-auto px-4 py-6"
  }
>
        <Routes>

          {/* Public Routes */}

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateNote />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>

      {!hideLayout && <Fotter />}
    </>
  );
};

export default App;