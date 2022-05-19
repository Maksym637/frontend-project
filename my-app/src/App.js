import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import LoginRoute from "./components/loginroute"
import Register from "./components/register";
import User from "./components/profile"
import Home from "./components/home"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<LoginRoute component={User} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
