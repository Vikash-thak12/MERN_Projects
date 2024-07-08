import { lazy } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
const App = () => {
  const Home = lazy(() => import("./pages/Home"))
  const Chat = lazy(() => import("./pages/Chat"))
  const Login = lazy(() => import("./pages/Login"))
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;