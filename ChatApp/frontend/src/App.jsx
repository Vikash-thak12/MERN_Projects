// import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Group from "./pages/Group";
import ProtectRoute from "./components/auth/ProtectRoute";

const App = () => { 

  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />} >
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/group" element={<Group />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;