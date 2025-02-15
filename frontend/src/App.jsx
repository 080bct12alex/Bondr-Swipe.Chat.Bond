import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";

function App() {
  const { authUser, setAuthUser } = useAuthContext();
  const location = useLocation();

  // Check for persisted auth state on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('chat-user');
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, [setAuthUser]);

  return (
    <div className="h-screen w-screen">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={authUser ? <Home /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/login" 
          element={authUser ? <Navigate to="/" replace /> : <Login />} 
        />
        <Route 
          path="/signup" 
          element={authUser ? <Navigate to="/" replace /> : <SignUp />} 
        />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
