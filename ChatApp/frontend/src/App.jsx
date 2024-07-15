import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";


const App = () => {
  const { authUser } = useAuthContext()
  console.log(authUser);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App; 